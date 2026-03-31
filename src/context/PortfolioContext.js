import React, { createContext, useContext, useEffect, useState } from "react";
import * as portfolioFallback from "../portfolio";

/**
 * PortfolioContext
 *
 * Fetches all portfolio content from the Express/MongoDB API on mount.
 * If the API is unavailable (no REACT_APP_API_URL set, or network error),
 * the context transparently falls back to the static portfolio.js data so
 * the site continues to work without a running backend.
 *
 * Usage in components:
 *   import { usePortfolio } from "../../context/PortfolioContext";
 *   const { greeting, skills, experience, ... } = usePortfolio();
 */

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(portfolioFallback);
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState("static"); // "static" | "mongodb"

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    if (!apiUrl) {
      // No API configured – use static portfolio.js data
      return;
    }

    setLoading(true);
    fetch(`${apiUrl}/api/portfolio`)
      .then((res) => {
        if (!res.ok) throw new Error(`API responded with status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // Merge API data over the static fallback so any sections missing
        // from the DB still have a value from portfolio.js.
        setPortfolio((prev) => ({ ...prev, ...data }));
        setSource("mongodb");
        console.log("[PortfolioContext] Loaded portfolio data from MongoDB.");
      })
      .catch((err) => {
        console.warn(
          "[PortfolioContext] Could not fetch from API, using static portfolio.js fallback.",
          err.message
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <PortfolioContext.Provider value={{ ...portfolio, loading, source }}>
      {children}
    </PortfolioContext.Provider>
  );
}

/**
 * usePortfolio – convenience hook.
 * Returns all portfolio sections plus { loading, source }.
 */
export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used inside <PortfolioProvider>");
  }
  return ctx;
}

export default PortfolioContext;
