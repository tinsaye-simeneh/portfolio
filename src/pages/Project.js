import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ProjectCard from "../components/ProjectCard";

import "../styles/Project.css";

import Coding from "../assets/Images/coding.jpg";

const Project = () => {
  return (
    <>
      <Sidebar ProjectIconColor="text-primary" />
      <div className="container my-4 bg-dark me-auto me-5 ps-5">
        <Topbar PageName="Project" />
        <div className="border border-white mt-5">
          <div className="row bg-dark py-5 mx-auto p-3 px-5">
            <ProjectCard title="Weather App" image={Coding}/>
            <ProjectCard />
            <ProjectCard />
          </div>
          <div className="row bg-dark pb-5 mx-auto p-3 px-5">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
