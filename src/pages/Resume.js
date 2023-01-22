import React from "react";

import "../styles/Resume.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Resume = () => {
  return (
    <>
      <Sidebar ProjectIconColor="text-primary" />
      <div className="container my-4 bg-dark me-auto me-5 ps-5">
        <Topbar PageName="Resume" />
      </div>
    </>
  );
};

export default Resume;
