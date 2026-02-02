import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import teslaLogo from "../../assests/images/tesla.png";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( Website Under Progress )
                </h2>
              )}
              <div className="professional-subtitle">
                <div className="subtitle-line">
                  <span className="machine-vision-text">
                    Machine Vision Intern
                  </span>
                  <span className="role-separator"> - </span>
                  <span className="tesla-bold">Tesla</span>
                  <img src={teslaLogo} alt="Tesla" className="company-logo" />
                </div>
                <div className="subtitle-line">
                  <span className="ms-ai-text">MS AI</span>
                  <span className="role-separator"> - </span>
                  <span className="neu-bold">NEU</span>
                  <span className="emoji"></span>
                  <span className="pipe-separator"> | </span>
                  <span className="ai-robotics">AI+Robotics</span>
                  <span className="emoji"></span>
                </div>
                <div className="subtitle-line">
                  <span className="research-text">Research Assistant</span>
                  <span className="role-separator"> - </span>
                  <span className="dal-bold">
                    Dependable Autonomy Lab (DAL)
                  </span>
                </div>
                <div className="subtitle-line">
                  <span className="research-text">Research Intern</span>
                  <span className="role-separator"> - </span>
                  <span className="iisc-bold">IISc Bangalore</span>
                  <span className="emoji"></span>
                </div>
              </div>
              <SocialMedia theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
