import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import Coding from "../assets/Images/coding.jpg";
import {BsGithub as GithubIcon} from "react-icons/bs";
import {BsLink45Deg as LinkIcon} from "react-icons/bs";

const Project = () => {
  return (
    <>
      <Sidebar ProjectIconColor="text-primary" />
      <div className="container bg-primary mt-4 bg-dark me-auto">
        <Topbar PageName="Project" />
        <div className="row mt-5 bg-dark border mx-auto p-3">
          <div className="col-md-4 col-12 border">
            <div className="card bg-dark border-0">
              <img src={Coding} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <p className="card-text text-white">
                  This is a longer card with supporting text below as a
                </p>
                <div className="row mx-auto">
                <div className="ms-auto col-md-6">
                    <a href="#" className="btn btn-secondary">
                    <GithubIcon size={20} className="mb-1"/>
                    <span className="ms-2">Github</span>
                    </a>
                  </div>
                  <div className="ms-auto col-md-6">
                    <a href="#" className="btn btn-secondary">
                    <LinkIcon size={20}/>
                    <span className="ms-1">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
