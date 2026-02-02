import React, { Component } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../portfolio";
import { Card, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./Projects.css";

class ProjectSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div
        className="project-section project-section-demo1"
        style={{ backgroundColor: theme.body }}
      >
        <h1 className="projects-heading" style={{ color: theme.text }}>
          Projects
        </h1>
        <p
          className="projects-subheading"
          style={{ color: theme.secondaryText }}
        >
          Highlights of my work in robotics, reinforcement learning, and
          autonomous systems
        </p>
        <Row xs={1} md={3} className="g-4 project-cards-row">
          {projects.data.map((project, index) => (
            <Col key={project.slug || index} className="project-col">
              <Fade right duration={1000}>
                <Card
                  className="project-card"
                  style={{ borderColor: theme.highlight }}
                >
                  <Card.Img
                    variant="top"
                    src={project.thumbnail}
                    alt={project.title}
                    className="project-image"
                  />
                  <Card.Body className="project-card-body">
                    <Card.Title
                      className="project-title"
                      style={{ color: theme.text }}
                    >
                      {project.title}
                    </Card.Title>
                    <Card.Text
                      className="project-description"
                      style={{ color: theme.secondaryText }}
                    >
                      {project.oneLiner ||
                        project.description.split("\n").filter(Boolean)[0]}
                    </Card.Text>
                    {project.tags && project.tags.length > 0 && (
                      <div
                        className="project-tags"
                        style={{ borderColor: theme.highlight }}
                      >
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="project-tag"
                            style={{
                              borderColor: theme.highlight,
                              color: theme.text,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="project-card-actions">
                      <Link
                        to={`/project/${project.slug}`}
                        className="project-button project-button-primary"
                        style={{
                          backgroundColor: theme.imageHighlight,
                          color: "#fff",
                        }}
                      >
                        View More
                      </Link>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button project-button-gh"
                        style={{
                          borderColor: theme.imageHighlight,
                          color: theme.imageHighlight,
                        }}
                      >
                        GitHub
                      </a>
                    </div>
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
