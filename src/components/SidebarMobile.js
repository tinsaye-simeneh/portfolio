import React from "react";

import { AiFillHome as HomeIcon } from "react-icons/ai";
import { VscProject as ProjectIcon } from "react-icons/vsc";
import { BsBookmarks as ResumeIcon } from "react-icons/bs";
import { BsCodeSquare as SkillIcon } from "react-icons/bs";
import { BiMessageSquareDots as ContactIcon } from "react-icons/bi";

import "../styles/Sidebar.css";

const SidebarMobile = ({
  HomeIconColor,
  ProjectIconColor,
  ResumeIconColor,
  SkillIconColor,
  ContactIconColor,
}) => {
  if (HomeIconColor === undefined) {
    HomeIconColor = "text-white";
  }
  if (ProjectIconColor === undefined) {
    ProjectIconColor = "text-white";
  }
  if (ResumeIconColor === undefined) {
    ResumeIconColor = "text-white";
  }
  if (SkillIconColor === undefined) {
    SkillIconColor = "text-white";
  }
  if (ContactIconColor === undefined) {
    ContactIconColor = "text-white";
  }
  return (
    <>
      {/* Mobile Sidebar */}
      <div className="container bg-black sidebar-mobile my-3">
        <nav class="navbar navbar-expand-sm shadow-lg">
          <div class="container-fluid">
            <a class="navbar-brand text-secondary" href="/home">
              {"<TSD/>"}
            </a>
            <button
              class="navbar-toggler my-2 bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul
                class="navbar-nav text-center mx-auto mt-3
              "
              >
                <li class="nav-item">
                  <a class="nav-link" href="/home">
                    <div className={HomeIconColor}>
                      <HomeIcon size={30} /> <span>Home</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/project">
                    <div className={ProjectIconColor}>
                      <ProjectIcon size={30} /> <span>Projects</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/resume">
                        <div className={ResumeIconColor}>
                      <ResumeIcon size={30} /> <span>Resume</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/skill">
                      <div className={SkillIconColor}>
                      <SkillIcon size={30} /> <span>Skills</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">
                        <div className={ContactIconColor}>
                      <ContactIcon size={30} /> <span>Contact</span>
                        </div>
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SidebarMobile;
