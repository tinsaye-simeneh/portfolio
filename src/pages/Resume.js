import React from "react";

import "../styles/Resume.css";
import Sidebar from "../components/Sidebar";
import SidebarMobile from "../components/SidebarMobile";
import Topbar from "../components/Topbar";
import ExperienceTemplate from "../components/ExperienceTemplate";
import EducationTemplate from "../components/EducationTemplate";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
  return (
    <>
      <Sidebar ResumeIconColor="text-primary" />
      <div className="container main-container bg-dark">
        <SidebarMobile ResumeIconColor="text-primary" />
        <div className="border border-white mt-5">
          <div className="bg-white text-dark text-center">
            <a
              href="https://drive.google.com/file/d/1gxONWZ6Fdazp64LTYSrvvtld05CQ6voK/view?usp=share_link"
              className="text-dark"
              target="_blank"
            >
              <AiOutlineDownload className="text-dark me-2" />
              Download the full Resume
            </a>
          </div>
          <div className="row bg-dark pb-5 pt-4 mx-auto p-3 px-5">
            <div className="col-md-8">
              <h6 className="text-white text-decoration-underline">
                Experience
              </h6>
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

              <h6 className="text-white text-decoration-underline mt-3">
                Education
              </h6>
              <EducationTemplate
                SchoolName="Addis Ababa Science and Technology University"
                EducationType="Bachelor of Science in ElectroMechanical Engineering"
                Timeline="Addis Ababa, Ethiopia | October 2022 - Present"
                SchoolLink="https://www.aastu.edu.et/"
              />
              <EducationTemplate
                SchoolName="Alx Africa - Holberton"
                EducationType="Certified Full Stack Web Developer"
                Timeline="Addis Ababa, Ethiopia | January 2021 - June 2022"
                SchoolLink="https://www.alxafrica.com/"
              />
            </div>
            <div className="col-md-4 text-white mt-3">
              <div>
                <p>
                  <MdOutlineLocationOn className="text-white me-2" />
                  Addis Ababa, Ethiopia
                </p>
                <p>
                  <AiOutlinePhone className="text-white me-1" />
                  +251983779803
                </p>
                <p>
                  <HiOutlineMail className="text-white me-2" />
                  tinsayesimeneh608@gmail.com
                </p>
              </div>

              <div className="mt-5">
                <h6 className="text-white text-decoration-underline mt-3">
                  Skills
                </h6>
                <p className="text-white">
                  Programming Languages - C, C++, JavaScript
                </p>
                <p className="text-white">
                  FrameWorks - React.js, Bootstrap, Tailwind
                </p>
                <p>Other Languages - HTML5, CSS3</p>
                <p>Designing Tools - Adobe XD</p>
              </div>

              <div className="mt-5">
                <h6 className="text-white text-decoration-underline mt-3">
                  Awards
                </h6>
                <h6 className="text-white">
                  3rd Best Project of the Hackathon
                </h6>
                <p className="text-white">GDG Addis - USAID Hackathon </p>
                <span className="text-white">
                  We develop a charity website to assist refugees to create a
                  connection between them and supporters.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
