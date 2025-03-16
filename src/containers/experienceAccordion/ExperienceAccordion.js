import React, { Component } from "react";
import ExperienceSection from "./ExperienceSection";
import { Carousel } from "react-bootstrap";
import "./ExperienceAccordion.css";
import workImage1 from "../../assests/images/intern.jpg"; // Add your work images here
import workImage2 from "../../assests/images/intern1.jpg";
import internshipImage1 from "../../assests/images/intern2.jpg"; // Add your internship images here
import internshipImage2 from "../../assests/images/lead1.jpg";
import leadershipImage1 from "../../assests/images/lead1.jpg"; // Add your leadership images here
import leadershipImage2 from "../../assests/images/lead2.jpg"; // Add your leadership images here
import leadershipImage3 from "../../assests/images/lead3.jpg";
import leadershipImage4 from "../../assests/images/lead4.jpg";
// import leadershipImage5 from "../../assests/images/lead5.jpg";
import { experience } from "../../portfolio";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience">
        <div className="experience-section">
          <div className="experience-left">
            <Carousel interval={2000}>
              <Carousel.Item>
                <img
                  src={workImage2}
                  alt="Work 2"
                  className="experience-image"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="experience-right">
            <ExperienceSection section={experience.sections[0]} theme={theme} />
          </div>
        </div>
        <div className="experience-section">
          <div className="experience-left">
            <Carousel interval={2000}>
              <Carousel.Item>
                <img
                  src={internshipImage1}
                  alt="Internship 1"
                  className="experience-image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={workImage1}
                  alt="Work 1"
                  className="experience-image"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="experience-right">
            <ExperienceSection section={experience.sections[1]} theme={theme} />
          </div>
        </div>
        <div className="experience-section">
          <div className="experience-left">
            <Carousel interval={1500}>
              <Carousel.Item>
                <img
                  src={leadershipImage1}
                  alt="Leadership 1"
                  className="experience-image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={leadershipImage2}
                  alt="Leadership 2"
                  className="experience-image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={leadershipImage3}
                  alt="Leadership 3"
                  className="experience-image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={leadershipImage4}
                  alt="Leadership 4"
                  className="experience-image"
                />
              </Carousel.Item>
              {/* <Carousel.Item>
              <img src={leadershipImage5} alt="Leadership 5" className="experience-image" />
            </Carousel.Item> */}
            </Carousel>
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
