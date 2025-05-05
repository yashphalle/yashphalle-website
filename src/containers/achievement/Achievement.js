import React from "react";
import { Carousel } from "react-bootstrap";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import achievementImage1 from "../../assests/images/yale.jpeg"; // Add your achievement images here
import achievementImage2 from "../../assests/images/harvard.jpeg";
import achievementImage3 from "../../assests/images/eyantra.jpeg";
import achievementImage4 from "../../assests/images/iisc-win.jpg";
import achievementImage5 from "../../assests/images/summit.jpg";
export default function Achievement() {
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">
            {"Competition & Co-curricular Activities"}
          </h1>
          <p className="subTitle achievement-subtitle">
            {
              "I love to participate in hackathons, coding competitions, and technical events"
            }
          </p>
        </div>
        <div className="achievement-cards-div">
          <Carousel interval={3000}>
            {" "}
            {/* Auto-scroll every 3 seconds */}
            <Carousel.Item>
              <img
                src={achievementImage4}
                alt="Achievement 4"
                className="achievement-image"
              />
              <div className="achievement-description">
                <h3>
                  Winner International Datathon by CDS, IISc.(AI-Generated
                  contentdetection)
                </h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={achievementImage1}
                alt="Achievement 1"
                className="achievement-image"
              />
              <div className="achievement-description">
                <h3>Finished in Top 15 at Yale Univ Hackathon</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={achievementImage2}
                alt="Achievement 2"
                className="achievement-image"
              />
              <div className="achievement-description">
                <h3>Won Best Product Design @Harvard University</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={achievementImage3}
                alt="Achievement 3"
                className="achievement-image"
              />
              <div className="achievement-description">
                <h3>Top 15 in Eyantra Competition by IIT,Bombay</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={achievementImage5}
                alt="Achievement 3"
                className="achievement-image"
              />
              <div className="achievement-description">
                <h3>Attented Robotics Summit & Expo, Boston</h3>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
