import React, { Component } from "react";
import { projects } from "../../portfolio";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./Projects.css";

class ProjectSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        <h1 className="projects-heading" style={{ color: theme.text }}>
          Projects
        </h1>
        <Row xs={1} md={3} className="g-4">
          {projects.data.map((project, index) => {
            return (
              <Col key={index}>
                <Fade right duration={1000}>
                  <Card className="project-card">
                    <Card.Img
                      variant="top"
                      src={project.thumbnail}
                      alt={project.title}
                    />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>
                        {project.description.split("\n").map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Button
                        variant="primary"
                        href={project.githubLink}
                        target="_blank"
                      >
                        View More
                      </Button>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default ProjectSection;
