import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { DiMongodb } from "react-icons/di";

import { SiTailwindcss, SiExpress, SiAdobeillustrator } from "react-icons/si";

import "./tools.css";

const Tools = () => {
  return (
    <div id="tool">
      <div className="tool-title">
        <h1 className="tools-heading">TOOLS</h1>
      </div>
      <div className="tools-icon-container">
        <div className="tools-icon-wrapper">
          <FaHtml5 className="logo--size--adjust html5" />

          <FaCss3Alt className="logo--size--adjust css3" />

          <FaJs className="logo--size--adjust javascript" />

          <FaBootstrap className="logo--size--adjust bootstrap" />

          <SiTailwindcss className="logo--size--adjust tailwind" />

          <DiMongodb className="logo--size--adjust mongodb" />
        </div>

        <div className="tools-icon-wrapper">
          <SiExpress className="logo--size--adjust expressjs" />

          <FaReact className="logo--size--adjust react" />

          <FaNodeJs className="logo--size--adjust nodejs" />

          <FaGitAlt className="logo--size--adjust git" />

          <FaFigma className="logo--size--adjust figma" />

          <SiAdobeillustrator className="logo--size--adjust adobeillustrator" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
