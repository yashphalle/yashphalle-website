import React, { Component } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./Experience.css";

class ExperienceSection extends Component {
  render() {
    const { section, theme } = this.props;

    return (
      <div>
        <h1 className="experience-heading" style={{ color: theme.text }}>
          {section.title}
        </h1>
        <Row xs={1} md={1} className="g-4">
          {section.experiences.map((exp, idx) => (
            <Col key={idx}>
              <Fade right duration={1000}>
                <Card className="experience-card">
                  <Card.Body>
                    <div className="experience-header">
                      <Image
                        src={exp.logo_path}
                        roundedCircle
                        className="experience-logo"
                      />
                      <div className="experience-details">
                        <Card.Subtitle className="mb-2 text-muted">
                          {exp.title}
                        </Card.Subtitle>
                        <Card.Text className="experience-company">
                          <a
                            href={exp.company_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {exp.company}
                          </a>
                        </Card.Text>
                        <Card.Text className="experience-location">
                          {exp.location}
                        </Card.Text>
                        <Card.Text className="experience-duration">
                          {exp.duration}
                        </Card.Text>
                      </div>
                    </div>
                    <Card.Text>
                      <ul>
                        {exp.description.map((point, pointIdx) => (
                          <li key={pointIdx}>{point}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default ExperienceSection;
