require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const portfolioRoutes = require("./routes/portfolio");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "PUT", "POST"],
  })
);
app.use(express.json({ limit: "2mb" }));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/portfolio", portfolioRoutes);

app.get("/health", (req, res) => res.json({ status: "ok" }));

// ─── Database + Server Start ──────────────────────────────────────────────────
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`✅  Connected to MongoDB: ${MONGODB_URI}`);
    app.listen(PORT, () =>
      console.log(`🚀  Portfolio API listening on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌  MongoDB connection failed:", err.message);
    process.exit(1);
  });
