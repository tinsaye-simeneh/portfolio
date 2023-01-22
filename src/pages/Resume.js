import React from "react";

import "../styles/Resume.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ExperienceTemplate from "../components/ExperienceTemplate";

const Resume = () => {
  return (
    <>
      <Sidebar ProjectIconColor="text-primary" />
      <div className="container my-4 bg-dark me-auto me-5 ps-5">
        <Topbar PageName="Resume" />

        <div className="border border-white mt-5">
          <div className="row bg-dark pb-5 pt-4 mx-auto p-3 px-5">
            <h6 className="text-white text-decoration-underline">Experience</h6>
            <ExperienceTemplate
              CompanyName="Gebeya.Inc"
              Position="Junior Frontend Developer"
              Timeline="Addis Ababa, Ethiopia | October 2022 - Present"
              CompanyLink="https://gebeya.com/"
            />
            <ExperienceTemplate 
                CompanyName="Utopix Technologies"
                Position="Frontend Developer"
                Timeline="Addis Ababa, Ethiopia | July 2021 - October 2021"
                CompanyLink="https://utopixtechnologies.vercel.com/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
