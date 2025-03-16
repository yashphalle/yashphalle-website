import React, { Component } from "react";
import { projects } from "../../portfolio";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./Projects.css";

class ProjectSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="project-section">
        <h1 className="projects-heading" style={{ color: theme.text }}>
          Projects
        </h1>
        <Row xs={1} md={3} className="g-4">
          {projects.data.map((project, index) => (
            <Col key={index}>
              <Fade right duration={1000}>
                <Card className="project-card">
                  <Card.Img
                    variant="top"
                    src={project.thumbnail}
                    alt={project.title}
                    className="project-image"
                  />
                  <Card.Body>
                    <Card.Title className="project-title">
                      {project.title}
                    </Card.Title>
                    <Card.Text className="project-description">
                      {project.description.split("\n").map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </Card.Text>
                    <Button
                      variant="primary"
                      href={project.githubLink}
                      target="_blank"
                      className="project-button"
                    >
                      View More
                    </Button>
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

export default ProjectSection;
