import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Skills = () => {
  return (
    <>
      <Sidebar ResumeIconColor="text-primary" />
      <div className="container my-4 bg-dark me-auto me-5 ps-5">
        <Topbar PageName="Resume" />
      </div>
    </>
  );
};

export default Skills;
