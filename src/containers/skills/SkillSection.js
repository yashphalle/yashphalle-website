import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

class SkillSection extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.intervalId = null;
  }

  componentDidMount() {
    this.startCarousel();
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel(interval = 3000) {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        currentIndex: (prevState.currentIndex + 1) % this.carouselImages.length
      }));
    }, interval);
  }

  renderCarousel() {
    const { currentIndex } = this.state;
    // Define your images array here. Replace with actual image paths.
    this.carouselImages = [
      require('../../assests/images/skills/DJI.jpg'),
      require('../../assests/images/skills/agri_drone.webp'),
      require('../../assests/images/skills/building.webp'),
      require('../../assests/images/skills/iisc_wall.jpg'),
      require('../../assests/images/skills/rc_plane.jpg')

      // more images
    ];

    return (
      <div className="carousel-container">
        {this.carouselImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Slide ${index}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
    );
  }

  render() {
    const theme = this.props.theme;

    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {this.renderCarousel()}
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>

                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
