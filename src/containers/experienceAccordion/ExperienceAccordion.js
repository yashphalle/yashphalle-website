import React, { Component } from "react";
import ExperienceSection from "./ExperienceSection";
import "./ExperienceAccordion.css";
import workImage from "../../assests/images/donkeycar.png"; // Add your work image here
import internshipImage from "../../assests/images/donkeycar.png"; // Add your internship image here
import leadershipImage from "../../assests/images/donkeycar.png"; // Add your leadership image here
import { experience } from "../../portfolio";

import ExperienceSectionWrapper from "./ExperienceSectionWrapper";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience">
        <div className="experience-section">
          <div className="experience-left">
            <img src={workImage} alt="Work" className="experience-image" />
          </div>
          <div className="experience-right">
            <ExperienceSection section={experience.sections[0]} theme={theme} />
          </div>
        </div>
        <div className="experience-section">
          <div className="experience-left">
            <img
              src={internshipImage}
              alt="Internships"
              className="experience-image"
            />
          </div>
          <div className="experience-right">
            <ExperienceSection section={experience.sections[1]} theme={theme} />
          </div>
        </div>
        <div className="experience-section">
          <div className="experience-left">
            <img
              src={leadershipImage}
              alt="Leadership"
              className="experience-image"
            />
          </div>
          <div className="experience-right">
            <ExperienceSection section={experience.sections[2]} theme={theme} />
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceAccordion;
