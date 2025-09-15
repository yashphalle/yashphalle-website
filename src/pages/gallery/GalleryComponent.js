import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./GalleryComponent.css";

class Gallery extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="gallery-main">
        <Header theme={this.props.theme} />
        <div className="basic-gallery">
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Gallery
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                A visual journey through my projects, experiences, and
                achievements
              </h3>
            </div>
          </div>
          <div className="gallery-content">
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src={require("../../assests/images/iisc-win.jpg")}
                  alt="IISc Research Experience"
                  className="gallery-image"
                />
                <div className="gallery-caption">
                  <h4>Research at IISc Bangalore</h4>
                  <p>Working on autonomous drone systems</p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src={require("../../assests/images/comp1.jpg")}
                  alt="Competition Achievement"
                  className="gallery-image"
                />
                <div className="gallery-caption">
                  <h4>Robotics Competitions</h4>
                  <p>Leading teams to victory</p>
                </div>
              </div>
              {/* Add more gallery items as needed */}
            </div>
          </div>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Gallery;
