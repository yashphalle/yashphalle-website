import React, { useState } from "react";
import { Fade } from "react-reveal";
import "./TimelineAccordion.css";

function TimelineAccordionItem({ experience, isLast, theme }) {
  const [open, setOpen] = useState(false);
  const hasDescription =
    experience.description && experience.description.length > 0;

  return (
    <div className="timeline-accordion-item">
      <div className="timeline-accordion-track">
        <div
          className="timeline-accordion-dot"
          style={{
            borderColor: theme?.imageHighlight || "#0E6BA8",
            backgroundColor: "#fff",
          }}
        />
        {!isLast && (
          <div
            className="timeline-accordion-line"
            style={{ backgroundColor: theme.headerColor }}
          />
        )}
      </div>
      <div className="timeline-accordion-card-wrap">
        <div
          className="timeline-accordion-card"
          style={{
            backgroundColor: "#fff",
            borderColor: "rgba(14, 107, 168, 0.15)",
          }}
        >
          <button
            type="button"
            className="timeline-accordion-trigger"
            onClick={() => hasDescription && setOpen(!open)}
            style={{
              backgroundColor: open && theme?.highlight
                ? theme.highlight + "20"
                : "transparent",
            }}
          >
            <div className="timeline-accordion-trigger-inner">
              <img
                src={experience.logo_path}
                alt=""
                className="timeline-accordion-logo"
              />
              <div className="timeline-accordion-meta">
                <h3
                  className="timeline-accordion-title"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h3>
                <a
                  href={experience.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-accordion-company"
                  style={{ color: theme.imageHighlight }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {experience.company}
                </a>
                <p
                  className="timeline-accordion-duration"
                  style={{ color: theme.secondaryText }}
                >
                  {experience.duration} · {experience.location}
                </p>
              </div>
            </div>
            {hasDescription && (
              <svg
                className={`timeline-accordion-chevron ${open ? "open" : ""}`}
                style={{ color: theme.imageHighlight }}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </button>
          {open && hasDescription && (
            <div
              className="timeline-accordion-body"
              style={{ borderTopColor: "rgba(14, 107, 168, 0.2)" }}
            >
              <ul className="timeline-accordion-description">
                {experience.description.map((point, i) => (
                  <li
                    key={i}
                    style={{ color: theme.secondaryText }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TimelineAccordion({ sections, theme }) {
  return (
    <div className="timeline-accordion">
      {sections.map((section) => (
        <div key={section.title} className="timeline-accordion-section">
          <Fade bottom duration={800} distance="20px">
            <div>
              <h2
                className="timeline-accordion-section-title"
                style={{ color: theme.text }}
              >
                {section.title}
              </h2>
              {section.subtitle && (
                <p
                  className="timeline-accordion-section-subtitle"
                  style={{ color: theme.secondaryText }}
                >
                  {section.subtitle}
                </p>
              )}
            </div>
          </Fade>
          <div className="timeline-accordion-list">
            {section.experiences.map((exp, i) => (
              <TimelineAccordionItem
                key={i}
                experience={exp}
                isLast={i === section.experiences.length - 1}
                theme={theme}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
