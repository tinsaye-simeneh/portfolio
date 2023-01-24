import React from "react";

import { AiFillHome as HomeIcon } from "react-icons/ai";
import { VscProject as ProjectIcon } from "react-icons/vsc";
import { BsBookmarks as ResumeIcon } from "react-icons/bs";
import { BsCodeSquare as SkillIcon } from "react-icons/bs";
import { BiMessageSquareDots as ContactIcon } from "react-icons/bi";

import "../styles/Sidebar.css";

const SidebarMobile = () => {
  return (
    <>
      {/* Mobile Sidebar */}
      <div className="container bg-dark sidebar-mobile">
        <nav class="navbar navbar-expand-sm shadow-lg">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="/home">
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
                class="navbar-nav
              "
              >
                <li class="nav-item">
                  <a class="nav-link" href="/home">
                    <HomeIcon size={30} /> <span>Home</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/project">
                    <ProjectIcon size={30} /> <span>Projects</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/resume">
                    <ResumeIcon size={30} /> <span>Resume</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/skill">
                    <SkillIcon size={30} /> <span>Skills</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">
                    <ContactIcon size={30} /> <span>Contact</span>
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
