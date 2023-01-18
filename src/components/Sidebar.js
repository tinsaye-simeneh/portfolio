import React from "react";

import { AiFillHome as HomeIcon } from "react-icons/ai";
import { VscProject as ProjectIcon } from "react-icons/vsc";
import { BsBookmarks as ResumeIcon } from "react-icons/bs";
import { BsCodeSquare as SkillIcon } from "react-icons/bs";
import { BiMessageSquareDots as ContactIcon } from "react-icons/bi";

import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="d-flex justify-content-between bg-primary">
      <div className="row bg-black">
        <div className="col-md-1 bg-black">
          <div className="row mx-auto bg-black">
            <div className="col-md-10 col-12 text-center mx-auto pt-5 mt-3">
              <HomeIcon className="text-white" size={30} />
            </div>
          </div>
          <div className="row mx-auto bg-black">
            <div className="col-md-10 col-12 text-center mx-auto pt-5 mt-4">
              <ProjectIcon className="text-white" size={30} />
            </div>
          </div>
          <div className="row mx-auto bg-black">
            <div className="col-md-10 col-12 text-center mx-auto pt-5 mt-4">
              <ResumeIcon className="text-white" size={30} />
            </div>
          </div>
          <div className="row mx-auto bg-black">
            <div className="col-md-10 col-12 text-center mx-auto pt-5 mt-4">
              <SkillIcon className="text-white" size={30} />
            </div>
          </div>
          <div className="row mx-auto bg-black">
            <div className="col-md-10 col-12 text-center mx-auto pt-5 mt-4">
              <ContactIcon className="text-white" size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
