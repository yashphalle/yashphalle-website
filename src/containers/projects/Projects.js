import React from "react";
import ProjectSection from "./ProjectSection";
import { Fade } from "react-reveal";

export default function Projects(props) {
  const theme = props.theme;
  return (
    <div className="main" id="projects">
      <div className="projects-header-div">
        <Fade bottom duration={2000} distance="20px">
          {/* <h1 className="projects-header" style={{ color: theme.text }}>
            Projects
          </h1> */}
        </Fade>
      </div>
      <ProjectSection theme={theme} />
    </div>
  );
}
