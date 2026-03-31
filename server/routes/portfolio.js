const express = require("express");
const rateLimit = require("express-rate-limit");
const router = express.Router();
const PortfolioSection = require("../models/Portfolio");

// Only allow alphanumeric + hyphens/underscores for section names
const SECTION_RE = /^[A-Za-z0-9_-]{1,64}$/;

/**
 * Rate limiter – 60 requests per minute per IP for read endpoints,
 * stricter (10/min) for write/seed endpoints.
 */
const readLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
});

const writeLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * GET /api/portfolio
 * Returns all portfolio sections as a flat object:
 * { greeting: {...}, skills: {...}, experience: {...}, ... }
 */
router.get("/", readLimiter, async (req, res) => {
  try {
    const sections = await PortfolioSection.find({}, { __v: 0 }).lean();
    if (sections.length === 0) {
      return res.status(404).json({
        error: "No portfolio data found. Run the seed script first.",
      });
    }

    // Convert array of { section, data } documents into a flat object
    const portfolio = {};
    sections.forEach((doc) => {
      portfolio[doc.section] = doc.data;
    });

    res.json(portfolio);
  } catch (err) {
    console.error("GET /api/portfolio error:", err.message);
    res.status(500).json({ error: "Failed to fetch portfolio data." });
  }
});

/**
 * GET /api/portfolio/:section
 * Returns data for one portfolio section, e.g. /api/portfolio/greeting
 */
router.get("/:section", readLimiter, async (req, res) => {
  const section = req.params.section;

  // Validate section name to prevent injection
  if (!SECTION_RE.test(section)) {
    return res.status(400).json({ error: "Invalid section name." });
  }

  try {
    const doc = await PortfolioSection.findOne({ section }, { __v: 0 }).lean();

    if (!doc) {
      return res.status(404).json({ error: "Section not found." });
    }

    res.json(doc.data);
  } catch (err) {
    console.error("GET /api/portfolio/:section error:", err.message);
    res.status(500).json({ error: "Failed to fetch section data." });
  }
});

/**
 * PUT /api/portfolio/:section
 * Upsert (create or replace) a portfolio section.
 * Body: the raw section data (any JSON shape).
 */
router.put("/:section", writeLimiter, async (req, res) => {
  const section = req.params.section;

  // Validate section name to prevent injection
  if (!SECTION_RE.test(section)) {
    return res.status(400).json({ error: "Invalid section name." });
  }

  try {
    const doc = await PortfolioSection.findOneAndUpdate(
      { section },
      { $set: { section, data: req.body } },
      { upsert: true, new: true, runValidators: false }
    ).lean();

    res.json({ section: doc.section, data: doc.data });
  } catch (err) {
    console.error("PUT /api/portfolio/:section error:", err.message);
    res.status(500).json({ error: "Failed to update section data." });
  }
});

/**
 * POST /api/portfolio/seed
 * Populate the database from the bundled seed data (portfolio-seed.js).
 * Safe to call multiple times – uses upsert so existing data is overwritten.
 */
router.post("/seed", writeLimiter, async (req, res) => {
  try {
    const seedData = require("../portfolio-seed");
    const ops = Object.entries(seedData).map(([section, data]) => ({
      updateOne: {
        filter: { section },
        update: { $set: { section, data } },
        upsert: true,
      },
    }));

    const result = await PortfolioSection.bulkWrite(ops);
    res.json({
      message: "Database seeded successfully.",
      upsertedCount: result.upsertedCount,
      modifiedCount: result.modifiedCount,
    });
  } catch (err) {
    console.error("POST /api/portfolio/seed error:", err.message);
    res.status(500).json({ error: "Failed to seed database." });
  }
});

module.exports = router;
