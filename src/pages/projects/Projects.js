import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  projectsHeader,
  publicationsHeader,
  publications,
  projects,
  greeting,
} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

// Project Card Component for portfolio.js data structure
function ProjectCard({ project, theme }) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="project-card"
      style={{ backgroundColor: theme.highlight, textDecoration: "none" }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div className="project-card-content">
          <div className="project-image-container">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-thumbnail"
            />
          </div>
          <div className="project-info">
            <h3 className="project-title" style={{ color: theme.text }}>
              {project.title}
            </h3>
            <p
              className="project-description"
              style={{ color: theme.secondaryText }}
            >
              {project.description}
            </p>
            {project.tags && project.tags.length > 0 && (
              <div className="project-tags">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="project-tag"
                    style={{ color: theme.secondaryText }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="project-link">
              <span className="view-details-btn" style={{ color: theme.text }}>
                View Details →
              </span>
            </div>
          </div>
        </div>
      </Fade>
    </Link>
  );
}

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="projects-cards-container">
          {projects.data.map((project, index) => (
            <ProjectCard key={index} project={project} theme={theme} />
          ))}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub, index) => (
            <PublicationCard key={index} pub={pub} theme={theme} />
          ))}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
