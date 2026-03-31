/**
 * seed.js – standalone script to populate MongoDB with initial portfolio data.
 *
 * Usage:
 *   MONGODB_URI=mongodb://localhost:27017/portfolio node seed.js
 *   (or set MONGODB_URI in server/.env before running)
 */
require("dotenv").config();
const mongoose = require("mongoose");
const PortfolioSection = require("./models/Portfolio");
const seedData = require("./portfolio-seed");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log(`Connected to MongoDB: ${MONGODB_URI}`);

  const ops = Object.entries(seedData).map(([section, data]) => ({
    updateOne: {
      filter: { section },
      update: { $set: { section, data } },
      upsert: true,
    },
  }));

  const result = await PortfolioSection.bulkWrite(ops);
  console.log(
    `✅  Seed complete – upserted: ${result.upsertedCount}, modified: ${result.modifiedCount}`
  );

  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
