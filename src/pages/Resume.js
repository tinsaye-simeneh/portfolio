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
                CompanyName="Safari Sports Bet"
                Position="IT Manager"
                Timeline="Addis Ababa, Ethiopia | July 2022 - Present"
            />
            <ExperienceTemplate
                CompanyName="Glory Sports Bet"
                Position="Web Developer"
                Timeline="Addis Ababa, Ethiopia | October 2021 - April 2022"
            />
            <ExperienceTemplate
                CompanyName="Elsam Technologies"
                Position="UI/UX Designer & Web Developer"
                Timeline="Addis Ababa, Ethiopia | June 2020 - April 2022"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
