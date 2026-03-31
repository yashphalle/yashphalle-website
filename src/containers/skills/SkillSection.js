import React from "react";
import "./Skills.css";
import { usePortfolio } from "../../context/PortfolioContext";
import { Fade } from "react-reveal";

/**
 * Split content string into pill items (comma-separated), trim, filter empty.
 */
function contentToPills(content) {
  if (!content || typeof content !== "string") return [];
  return content
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function SkillSection(props) {
  const theme = props.theme;
  const { skills } = usePortfolio();

  return (
    <div
      className="skills-pills-wrapper"
      style={{
        "--highlight": theme.highlight,
        "--imageHighlight": theme.imageHighlight,
        "--jacketColor": theme.jacketColor,
        "--secondaryText": theme.secondaryText,
      }}
    >
      {(skills?.data || []).map((skillGroup, groupIndex) => (
        <div key={groupIndex} className="skills-main-div skills-pills-main">
          <Fade bottom duration={1000}>
            <h2
              className="skills-heading skills-pills-title"
              style={{ color: theme.text }}
            >
              {skillGroup.title}
            </h2>
          </Fade>

          {skillGroup.skills.map((skillItem, index) => {
            const hasSubGroups =
              skillItem.subGroups && skillItem.subGroups.length > 0;
            const pills = hasSubGroups
              ? []
              : contentToPills(skillItem.content);
            const categoryLabel = skillItem.title.trim();

            return (
              <Fade key={index} bottom duration={800} delay={index * 100}>
                <div className="skills-category-block">
                  <div
                    className="skills-category-label"
                    style={{ color: theme.jacketColor }}
                  >
                    {categoryLabel}
                  </div>
                  {hasSubGroups ? (
                    <div className="skills-pills-subgroups">
                      {skillItem.subGroups.map((sg, sgIndex) => (
                        <div key={sgIndex} className="skills-subgroup">
                          <span
                            className="skills-subgroup-label"
                            style={{ color: theme.secondaryText }}
                          >
                            {sg.label}
                          </span>
                          <div className="skills-pills">
                            {(sg.items || []).map((pillText, pillIndex) => (
                              <span
                                key={pillIndex}
                                className="skills-pill"
                                style={{
                                  color: theme.text,
                                  borderColor: theme.imageHighlight,
                                }}
                              >
                                {pillText}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="skills-pills">
                      {pills.map((pillText, pillIndex) => (
                        <span
                          key={pillIndex}
                          className="skills-pill"
                          style={{
                            color: theme.text,
                            borderColor: theme.imageHighlight,
                          }}
                        >
                          {pillText}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Fade>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default SkillSection;
