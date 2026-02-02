import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { events } from "../../portfolio";
import "./EventsEtherealCarousel.css";

const SLIDE_PERCENT = 100;
const AUTO_ROTATE_MS = 3000;

export default function EventsEtherealCarousel(props) {
  const theme = props.theme;
  const items = events?.items || [];
  const [index, setIndex] = useState(0);
  const [stepPx, setStepPx] = useState(0);
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    if (!wrapRef.current || items.length === 0) return;
    const w = wrapRef.current.getBoundingClientRect().width;
    setStepPx(w);
  }, [items.length]);

  useEffect(() => {
    if (!wrapRef.current || items.length === 0) return;
    const measureStep = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.getBoundingClientRect().width;
      setStepPx(w);
    };
    const ro = new ResizeObserver(measureStep);
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [items.length]);

  useEffect(() => {
    if (items.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(t);
  }, [items.length]);

  if (items.length === 0 || !events) return null;

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div
      className="events-ethereal"
      id="achievements"
      style={{
        "--ethereal-bg": theme.body,
        "--ethereal-text": theme.text,
        "--ethereal-highlight": theme.highlight,
        "--ethereal-accent": theme.imageHighlight,
        "--ethereal-secondary": theme.secondaryText,
        "--slide-width": `${SLIDE_PERCENT}%`,
      }}
      >
      <div className="events-ethereal-inner">
        <div className="events-ethereal-header">
          <h2 className="events-ethereal-title" style={{ color: theme.text }}>
            {events?.title || "Events & Activities"}
          </h2>
          <p className="events-ethereal-subtitle" style={{ color: theme.secondaryText }}>
            {events?.subtitle || "Hackathons, competitions, and technical events"}
          </p>
        </div>

        <div ref={wrapRef} className="events-ethereal-carousel-wrap">
          <div
            className="events-ethereal-track"
            style={{
              transform: `translateX(-${index * (stepPx || 1)}px)`,
            }}
          >
            {items.map((item, i) => (
              <div key={i} className={`events-ethereal-slide ${i === index ? "active" : ""}`}>
                <div className="events-ethereal-card">
                  <div className="events-ethereal-card-img-wrap">
                    <img
                      src={item.image}
                      alt=""
                      className="events-ethereal-card-img"
                    />
                  </div>
                  <div
                    className="events-ethereal-card-overlay"
                    style={{
                      background: `linear-gradient(transparent 20%, ${theme.jacketColor || "rgba(0,0,0,0.6)"}ee 100%)`,
                    }}
                  >
                    <div className="events-ethereal-card-glass">
                      <h3 className="events-ethereal-card-title" style={{ color: "#fff" }}>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="events-ethereal-card-link"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      {item.description && (
                        <p className="events-ethereal-card-desc">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {items.length > 1 && (
            <>
              <button
                type="button"
                className="events-ethereal-prev"
                onClick={goPrev}
                aria-label="Previous"
                style={{ color: theme.imageHighlight }}
              >
                ‹
              </button>
              <button
                type="button"
                className="events-ethereal-next"
                onClick={goNext}
                aria-label="Next"
                style={{ color: theme.imageHighlight }}
              >
                ›
              </button>
              <div className="events-ethereal-indicators" aria-label="Slide position">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`events-ethereal-pill ${i === index ? "active" : ""}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                  >
                    {i === index && (
                      <span
                        key={index}
                        className="events-ethereal-pill-fill"
                        style={{
                          animationDuration: `${AUTO_ROTATE_MS}ms`,
                          backgroundColor: theme.imageHighlight,
                        }}
                        aria-hidden
                      />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
