import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { projects } from "../../portfolio";
import "./ProjectDetail.css";

export default function ProjectDetail(props) {
  const { slug } = useParams();
  const theme = props.theme;
  const project = projects.data.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div
        className="project-detail-main"
        style={{ backgroundColor: theme.body }}
      >
        <Header theme={theme} />
        <div className="project-detail-not-found">
          <h1 style={{ color: theme.text }}>Project not found</h1>
          <Link to="/home" style={{ color: theme.imageHighlight }}>
            Back to Home
          </Link>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }

  return (
    <div
      className="project-detail-main"
      style={{ backgroundColor: theme.body }}
    >
      <Header theme={theme} />
      <div className="project-detail-content">
        <Link
          to={{ pathname: "/home", state: { scrollToProjects: true } }}
          className="project-detail-back"
          style={{ color: theme.imageHighlight }}
        >
          ← Back to Projects
        </Link>
        <article
          className="project-detail-card"
          style={{ borderColor: theme.highlight }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="project-detail-image"
          />
          <div className="project-detail-body">
            <h1 className="project-detail-title" style={{ color: theme.text }}>
              {project.title}
            </h1>
            {project.tags && project.tags.length > 0 && (
              <div className="project-detail-tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="project-detail-tag"
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
            <div className="project-detail-description">
              {project.description.split("\n").map((line, idx) => (
                <p key={idx} style={{ color: theme.secondaryText }}>
                  {line.trim() || <br />}
                </p>
              ))}
            </div>
            <div className="project-detail-actions">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-btn project-detail-btn-primary"
                style={{
                  backgroundColor: theme.imageHighlight,
                  color: "#fff",
                }}
              >
                View on GitHub
              </a>
              <Link
                to={{ pathname: "/home", state: { scrollToProjects: true } }}
                className="project-detail-btn project-detail-btn-secondary"
                style={{
                  borderColor: theme.imageHighlight,
                  color: theme.imageHighlight,
                }}
              >
                Back to Projects
              </Link>
            </div>
          </div>
        </article>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
