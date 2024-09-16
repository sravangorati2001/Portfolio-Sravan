import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SoftwareSkill = ({ logos }) => {
  return (
    <div className="software-skills-container">
      {logos.map((logo) => (
        <OverlayTrigger
          key={logo.skillName}
          placement="top"
          overlay={
            <Tooltip id={`tooltip-${logo.skillName}`}>
              <strong>{logo.skillName}</strong>
            </Tooltip>
          }
        >
          <div className="skill-box">
            {logo.fontAwesomeClassname && (
              <span
                className="iconify"
                data-icon={logo.fontAwesomeClassname}
                style={logo.style}
                data-inline="false"
              ></span>
            )}
            {!logo.fontAwesomeClassname && logo.imageSrc && (
              <img
                className="skill-image"
                src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                alt={logo.skillName}
                style={logo.style}
              />
            )}
            
          </div>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default SoftwareSkill;