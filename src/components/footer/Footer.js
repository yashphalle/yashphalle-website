import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
        <p
          className="footer-credit"
          style={{ color: props.theme.secondaryText }}
        >
          Theme inspired by{" "}
          <a
            href="https://github.com/ashutosh1919/masterPortfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: props.theme.secondaryText }}
          >
            ashutosh1919
          </a>
        </p>
      </Fade>
    </div>
  );
}
