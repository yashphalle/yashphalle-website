import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>

                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillItem, index) => {
                      return (
                        <p
                          key={index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          <span className="skill-emoji">
                            {skillItem.title.split(" ")[0]}
                          </span>
                          <span className="skill-title-text">
                            {" "}
                            {skillItem.title.split(" ").slice(1).join(" ")}
                          </span>
                          <span className="skill-content">
                            {" "}
                            {skillItem.content}
                          </span>
                        </p>
                      );
                    })}
                  </div>
                </Fade>

                {/* <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
