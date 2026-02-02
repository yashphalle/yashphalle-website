//this is for the carousel of images in the skills section
import React, { Component } from "react";

export default class DataScienceImg extends Component {
  startCarousel(interval = 3000) {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % this.carouselImages.length,
      }));
    }, interval);
  }

  renderCarousel() {
    const { currentIndex } = this.state;
    // Define your images array here. Replace with actual image paths.
    this.carouselImages = [
      require("../../assests/images/skills/DJI.jpg"),
      require("../../assests/images/agri_drone.webp"),
      require("../../assests/images/skills/Drone_small.jpg"),
      require("../../assests/images/skills/building.webp"),
      require("../../assests/images/skills/iisc_wall.jpg"),
      require("../../assests/images/skills/rc_plane.jpg"),
    ];

    return (
      <div className="carousel-container">
        {this.carouselImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Slide ${index}`}
            style={{ display: index === currentIndex ? "block" : "none" }}
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
                <div className="skills-image-div">{this.renderCarousel()}</div>
              </Fade>
            </div>
          );
        })}
      </div>
    );
  }
}
