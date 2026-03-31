/**
 * resolveImageSrc
 *
 * Resolves an image value coming from either:
 *   1. MongoDB (plain string path like "neu-logo.png" or a full URL)
 *   2. portfolio.js fallback (already-resolved webpack module, i.e. a string
 *      starting with "/" or a data: URI – both fine as <img src>)
 *
 * For relative paths from the database (just a filename or sub-path),
 * we dynamically require() it from the local assests/images/ directory so
 * webpack bundles it and the image works even after deployment.
 *
 * @param {string|object} value  The image value (path, URL, or required module)
 * @returns {string}             A resolved src string safe to use in <img>
 */
export function resolveImageSrc(value) {
  if (!value) return "";
  // Already a resolved module reference or absolute/data URL – use as-is
  if (typeof value !== "string") return value;
  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("/") ||
    value.startsWith("data:")
  ) {
    return value;
  }

  // Relative path string (from DB seed) – require() from local assets bundle.
  try {
    // eslint-disable-next-line import/no-dynamic-require
    return require(`../assests/images/${value}`);
  } catch {
    return value;
  }
}
