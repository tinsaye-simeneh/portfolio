import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import '../styles/Project.css'

import Coding from "../assets/Images/coding.jpg";
import {BsGithub as GithubIcon} from "react-icons/bs";
import {BsLink45Deg as LinkIcon} from "react-icons/bs";

const Project = () => {
  return (
    <>
      <Sidebar ProjectIconColor="text-primary" />
      <div className="container my-4 bg-dark me-auto me-5 ps-5">
        <Topbar PageName="Project" />
        <div className="border border-white mt-5">
        <div className="row bg-dark py-5 mx-auto p-3 px-5">
          <div className="col-md-4 col-12 mx-auto">
            <div className="card bg-dark border-0">
              <img src={Coding} className="card-img-top" alt="..." />
              <div className="card-body bg-white rounded">
                <h5 className="card-title text-dark text-center">Weather App</h5>
                <hr className="text-dark"/>
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

          <div className="col-md-4 mx-5 col-12 mx-auto">
            <div className="card bg-dark rounded">
              <img src={Coding} className="card-img-top" alt="..." />
              <div className="card-body bg-white rounded">
                <h5 className="card-title text-dark text-center">Weather App</h5>
                <hr className="text-dark"/>
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

          <div className="col-md-4 col-12 mx-auto">
            <div className="card bg-dark rounded">
              <img src={Coding} className="card-img-top" alt="..." />
              <div className="card-body bg-white rounded">
                <h5 className="card-title text-dark text-center">Weather App</h5>
                <hr className="text-dark"/>
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

          <div className="row bg-dark pb-5 mx-auto p-3 px-5">
          <div className="col-md-4 col-12 mx-auto">
            <div className="card bg-dark rounded">
              <img src={Coding} className="card-img-top" alt="..." />
              <div className="card-body bg-white rounded">
                <h5 className="card-title text-dark text-center">Weather App</h5>
                <hr className="text-dark"/>
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

          <div className="col-md-4 col-12 mx-auto">
            <div className="card bg-dark rounded">
              <img src={Coding} className="card-img-top" alt="..." />
              <div className="card-body bg-white rounded">
                <h5 className="card-title text-dark text-center">Weather App</h5>
                <hr className="text-dark"/>
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

          <div className="col-md-4 col-12 mx-auto">
            <div className="card bg-dark rounded">
              <img src={Coding} className="card-img-top" alt="..." />
              <div className="card-body bg-white rounded">
                <h5 className="card-title text-dark text-center">Weather App</h5>
                <hr className="text-dark"/>
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
      </div>
    </>
  );
};

export default Project;
