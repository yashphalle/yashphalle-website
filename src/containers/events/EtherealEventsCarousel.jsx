import React from "react";
import { Carousel } from "react-bootstrap";
import { events } from "../../portfolio";
import "./EtherealEventsCarousel.css";

export default function EtherealEventsCarousel(props) {
  const theme = props.theme;
  const items = events?.items || [];

  if (items.length === 0) return null;

  return (
    <div className="ethereal-events" id="events">
      <div className="ethereal-events-inner">
        <h2
          className="ethereal-events-title"
          style={{ color: theme.text }}
        >
          {events?.title || "Events & Activities"}
        </h2>
        <p
          className="ethereal-events-subtitle"
          style={{ color: theme.secondaryText }}
        >
          {events?.subtitle || "Hackathons, competitions, and technical events"}
        </p>
        <div
          className="ethereal-events-carousel-wrap"
          style={{
            ["--ethereal-highlight"]: theme.highlight,
            ["--ethereal-imageHighlight"]: theme.imageHighlight,
            ["--ethereal-text"]: theme.text,
          }}
        >
          <Carousel fade interval={4000} pause="hover" indicators>
            {items.map((item, i) => (
              <Carousel.Item key={i}>
                <div className="ethereal-slide">
                  <div className="ethereal-slide-image-wrap">
                    <img
                      src={item.image}
                      alt=""
                      className="ethereal-slide-image"
                    />
                    <div
                      className="ethereal-slide-gradient"
                      aria-hidden
                    />
                  </div>
                  <div className="ethereal-slide-glass">
                    <h3 className="ethereal-slide-title">{item.title}</h3>
                    <p className="ethereal-slide-desc">{item.description}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ethereal-slide-link"
                        style={{ color: theme.imageHighlight }}
                      >
                        View project →
                      </a>
                    )}
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
