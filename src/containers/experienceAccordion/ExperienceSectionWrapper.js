import React from "react";
import ExperienceSection from "./ExperienceSection";
import "./ExperienceAccordion.css";

const ExperienceSectionWrapper = ({ image, section, theme }) => {
  return (
    <div className="experience-section">
      <div className="experience-left">
        <img src={image} alt={section.title} className="experience-image" />
      </div>
      <div className="experience-right">
        <ExperienceSection section={section} theme={theme} />
      </div>
    </div>
  );
};

export default ExperienceSectionWrapper;
