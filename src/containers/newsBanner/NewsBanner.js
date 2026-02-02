import React, { useState } from "react";
import { featuredNews } from "../../portfolio";
import "./NewsBanner.css";

const TICKER_DURATION = 35; /* seconds for one full cycle */

export default function NewsBanner(props) {
  const theme = props.theme;
  const [dismissed, setDismissed] = useState(false);

  const items = featuredNews?.items || [];
  if (dismissed || items.length === 0) return null;

  /* Duplicate items so the scroll loops seamlessly */
  const duplicated = [...items, ...items];

  return (
    <div className="news-ticker-container">
      <div
        className="news-ticker-wrap"
        style={{
          background: `linear-gradient(90deg, ${theme.imageHighlight} 0%, ${theme.jacketColor} 100%)`,
        }}
      >
        <span className="news-ticker-label">New!</span>
        <div className="news-ticker-viewport">
          <div
            className="news-ticker-track"
            style={{
              animation: `news-ticker-scroll ${TICKER_DURATION}s linear infinite`,
            }}
          >
            {duplicated.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-ticker-item"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="news-ticker-close"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss news ticker"
        >
          ×
        </button>
      </div>
    </div>
  );
}
