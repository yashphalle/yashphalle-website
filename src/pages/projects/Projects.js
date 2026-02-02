import React, { Component } from "react";
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
  socialMediaLinks,
} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

// Project Card Component for portfolio.js data structure
function ProjectCard({ project, theme }) {
  const openProjectInNewTab = (url) => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <div
      className="project-card"
      style={{ backgroundColor: theme.highlight }}
      onClick={() => openProjectInNewTab(project.githubLink)}
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
            <div className="project-link">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.text }}
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  aria-hidden="true"
                  height="20"
                  viewBox="0 0 16 16"
                  width="20"
                  fill={theme.text}
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
                <span style={{ marginLeft: "8px" }}>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
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
          href={
            socialMediaLinks.find((link) => link.name === "Github")?.link || "#"
          }
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
