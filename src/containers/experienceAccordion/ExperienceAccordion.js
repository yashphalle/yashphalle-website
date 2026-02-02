import React from "react";
import { Carousel } from "react-bootstrap";
import TimelineAccordion from "./TimelineAccordion.jsx";
import "./ExperienceAccordion.css";
import { experience } from "../../portfolio";

// Carousel images per section – from images/Internships, images/Lab, images/Leadership
import internshipImage1 from "../../assests/images/Internships/intern1.jpg";
import internshipImage2 from "../../assests/images/Internships/intern2.jpg";
import internshipImage3 from "../../assests/images/Internships/intern3.jpg";
import internshipImage4 from "../../assests/images/Internships/intern4.jpg";
import internshipImage5 from "../../assests/images/Internships/intern5.jpg";
import researchTeachingImage1 from "../../assests/images/Lab/lab1.jpg";
import researchTeachingImage2 from "../../assests/images/Lab/lab2.jpg";
import researchTeachingImage3 from "../../assests/images/Lab/Lab3.jpg";
import researchTeachingImage4 from "../../assests/images/Lab/lab4.jpg";
import leadershipImage1 from "../../assests/images/Leadership/lead1.jpg";
import leadershipImage2 from "../../assests/images/Leadership/lead2.jpg";
import leadershipImage3 from "../../assests/images/Leadership/lead3.jpg";
import leadershipImage4 from "../../assests/images/Leadership/Lead4.jpg";
import leadershipImage5 from "../../assests/images/Leadership/lead5.jpg";
import leadershipImage6 from "../../assests/images/Leadership/lead6.jpg";

const SECTION_CAROUSEL_IMAGES = {
  Internships: [
    internshipImage1,
    internshipImage2,
    internshipImage3,
    internshipImage4,
    internshipImage5,
  ],
  // "Work" is your Northeastern RA/TA section right now — reuse Lab images for it.
  Work: [
    researchTeachingImage1,
    researchTeachingImage2,
    researchTeachingImage3,
    researchTeachingImage4,
  ],
  "Research & Teaching": [
    researchTeachingImage1,
    researchTeachingImage2,
    researchTeachingImage3,
    researchTeachingImage4,
  ],
  Leadership: [
    leadershipImage1,
    leadershipImage2,
    leadershipImage3,
    leadershipImage4,
    leadershipImage5,
    leadershipImage6,
  ],
};

export default function ExperienceAccordion(props) {
  const theme = props.theme;
  const sections = props.sections || experience.sections || [];

  // Enforce a stable section order so it doesn't "swap" unexpectedly
  const sectionRank = (section) => {
    if (section?.internships || section?.title === "Internships") return 1;
    if (section?.work || section?.title === "Work") return 2;
    if (section?.leadership || section?.title === "Leadership") return 3;
    return 99;
  };

  const orderedSections = [...sections].sort(
    (a, b) => sectionRank(a) - sectionRank(b)
  );

  return (
    <div className="experience timeline-accordion-wrapper">
      {orderedSections.map((section) => {
        const carouselImages = SECTION_CAROUSEL_IMAGES[section.title] || [];
        return (
          <div key={section.title} className="experience-section">
            <div className="experience-left">
              {carouselImages.length > 0 ? (
                <Carousel
                  interval={3000}
                  fade
                  pause="hover"
                  className="experience-carousel"
                >
                  {carouselImages.map((img, i) => (
                    <Carousel.Item key={i}>
                      <img
                        src={img}
                        alt={`${section.title} ${i + 1}`}
                        className="experience-image"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <div className="experience-image-placeholder" />
              )}
            </div>
            <div className="experience-right">
              <TimelineAccordion sections={[section]} theme={theme} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
