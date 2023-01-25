import React from "react";

import Sidebar from "../components/Sidebar";
import SidebarMobile from "../components/SidebarMobile";
import Topbar from "../components/Topbar";

import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <Sidebar SkillIconColor="text-primary" />
      <div className="container main-container bg-dark">
        <SidebarMobile SkillIconColor="text-primary" />
        <div className="border border-white mt-5">
          <div className="row bg-dark pb-5 pt-4 mx-auto p-3 px-5">
            <div className="col-md-12 mx-auto">
              <h4 className="text-white text-decoration-underline my-4 text-center pb-4">
                Coding SkillSet
              </h4>
              <div className="row mx-auto">
                <div className="col-md-3 bg-white text-center border rounded py-3 skill-card mx-auto">
                  <AiOutlineHtml5 className="text-primary me-3" size={40} />
                  <h4 className="text-dark d-inline">HTML 5</h4>
                </div>
                <div className="col-md-3 bg-white text-center border rounded py-3 skill-card mx-auto">
                  <DiCss3 className="text-primary me-3" size={40} />
                  <h4 className="text-dark d-inline">CSS 3</h4>
                </div>
                <div className="col-md-3 bg-white text-center border rounded py-3 skill-card mx-auto">
                  <BsFillBootstrapFill
                    className="text-primary me-3"
                    size={40}
                  />
                  <h5 className="text-dark d-inline">Bootstrap</h5>
                </div>
              </div>
              <div className="row pt-5 text-center mx-auto">
                <div className="col-md-3 bg-white text-center border rounded py-3 skill-card mx-auto">
                  <SiJavascript className="text-primary me-3" size={40} />
                  <h5 className="text-dark d-inline">JavaScript</h5>
                </div>
                <div className="col-md-3 bg-white text-center border rounded py-3 skill-card mx-auto">
                  <FaReact className="text-primary me-3" size={40} />
                  <h5 className="text-dark d-inline">React.js</h5>
                </div>
                <div className="col-md-3 bg-white text-center border rounded py-3 skill-card mx-auto">
                  <SiCplusplus className="text-primary me-3" size={40} />
                  <h5 className="text-dark d-inline">C++</h5>
                </div>
              </div>

              <div className="col-md-12 mx-auto">
                <h4 className="text-white text-decoration-underline my-4 text-center py-3">
                  Designing Tools and Skills
                </h4>
                <div className="col-md-3 bg-white text-center border rounded py-3 skill-card mx-auto">
                  <SiAdobexd className="text-primary me-3" size={40} />
                  <h4 className="text-dark d-inline">Adobe XD</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
