import React from "react";
import Data from "./Data/Data";
import Card from "./Card/Card";
import "./project.css";
const Project = () => {
  const mydb = Data.map((Data) => {
    return (
      <Card key={Data.id} title={Data.title} desc={Data.desc} url={Data.url} />
    );
  });

  return (
    <div className="section-wrapper" id="project">
      <h1 className="section-title"> PROJECTS</h1>
      <div className="wrapper">{mydb}</div>
    </div>
  );
};

export default Project;
