const mongoose = require("mongoose");

/**
 * Generic schema that holds one portfolio section per document.
 * Each document has:
 *   - section  {String}  unique key, e.g. "greeting", "skills", "experience"
 *   - data     {Mixed}   the actual content (any shape)
 */
const portfolioSectionSchema = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
    // Store the data sub-document as-is without mongoose transformations
    strict: false,
  }
);

module.exports = mongoose.model("PortfolioSection", portfolioSectionSchema);
