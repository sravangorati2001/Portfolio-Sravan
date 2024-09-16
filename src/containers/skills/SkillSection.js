import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

const SkillSection = ({ theme }) => {
  return (
    <div className="skills-main-container">
      {skills.data.map((skill, index) => (
        <div key={index} className="skill-section">
          <Fade bottom duration={1000}>
            <h1 className="skills-heading" style={{ color: theme.text }}>
              {skill.title}
            </h1>
          </Fade>

          <Fade bottom duration={1200}>
            <div className="software-skills-container">
              <SoftwareSkill logos={skill.softwareSkills} />
            </div>
          </Fade>

          <Fade bottom duration={1400}>
            <div className="skills-description hidden">
              {skill.skills.map((skillSentence, idx) => (
                <div key={idx} className="skill-item">

                  <p
                    className="subTitle skills-text hidden"
                    style={{ color: theme.secondaryText }}
                  >
                    {skillSentence}
                  </p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;