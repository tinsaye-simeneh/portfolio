import React from "react";

import { BsGithub as GithubIcon } from "react-icons/bs";
import { BsLink45Deg as LinkIcon } from "react-icons/bs";

import "../styles/ProjectCard.css";

const ProjectCard = ({ title, image, GithubLink, LiveLink }) => {
  if (LiveLink === undefined) LiveLink = GithubLink;

  return (
    <div className="col-md-4 col-12 mx-auto">
      <div className="card bg-dark rounded">
        <div className="card-img-top bg-gradient p-5 text-center text-white">
           {title}
        </div>
        <div className="card-body bg-white rounded">
          <h5 className="card-title text-dark text-center">{title}</h5>
          <hr className="text-dark" />
          <div className="row mx-auto text-center">
            <div className="ms-auto col-md-6">
              <a href={GithubLink} className="btn btn-secondary">
                <GithubIcon size={20} className="mb-1" />
                <span className="ms-2">Github</span>
              </a>
            </div>
            <div className="ms-auto col-md-6">
              <a href={LiveLink} className="btn btn-secondary">
                <LinkIcon size={20} />
                <span className="ms-1">Live</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
