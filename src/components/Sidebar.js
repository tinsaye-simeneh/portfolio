import React from "react";

import { AiFillHome as HomeIcon } from "react-icons/ai";
import { VscProject as ProjectIcon } from "react-icons/vsc";
import { BsBookmarks as ResumeIcon } from "react-icons/bs";
import { BsCodeSquare as SkillIcon } from "react-icons/bs";
import { BiMessageSquareDots as ContactIcon } from "react-icons/bi";
import { CiLight as ThemeIcon } from "react-icons/ci";

import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
        <div className="col-md-1 bg-black ml-auto float-left bg-primary">
          <div className="row mx-auto bg-black">
            <div className="col-md-8 col-12 text-center mx-auto py-3 mt-4">
              <HomeIcon className="text-white" size={30} />
            </div>
          </div>
          <div className="row mx-auto bg-black">
            <div className="col-md-8 col-12 text-center mx-auto py-4 mt-3">
              <ProjectIcon className="text-white" size={30} />
            </div>
          </div>
          <div className="row mx-auto bg-black">
            <div className="col-md-8 col-12 text-center mx-auto py-4 mt-3">
              <ResumeIcon className="text-white" size={30} />
            </div>
          </div>
          <div className="row mx-auto bg-black">
            <div className="col-md-8 col-12 text-center mx-auto py-4 mt-3">
              <SkillIcon className="text-white" size={30} />
            </div>
          </div>
          <div className="row mx-auto bg-black">
            <div className="col-md-8 col-12 text-center mx-auto py-4 mt-4">
              <ContactIcon className="text-white" size={30} />
            </div>
          </div>
          <div className="row mx-auto bg-black mt-5 pt-4">
            <div className="col-md-10 col-12 text-center mx-auto mt-5 pb-5">
              <ThemeIcon className="text-white" size={30} />
            </div>
          </div>
        </div>
  );
};

export default Sidebar;
