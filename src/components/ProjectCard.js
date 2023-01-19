import React from "react";

import { BsGithub as GithubIcon } from "react-icons/bs";
import { BsLink45Deg as LinkIcon } from "react-icons/bs";

const ProjectCard = ({ title, image, GithubLink, DemoLink }) => {
  if (DemoLink === undefined) DemoLink = GithubLink;

  return (
    <div className="col-md-4 col-12 mx-auto">
      <div className="card bg-dark rounded">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body bg-white rounded">
          <h5 className="card-title text-dark text-center">{title}</h5>
          <hr className="text-dark" />
          <div className="row mx-auto">
            <div className="ms-auto col-md-6">
              <a href={GithubLink} className="btn btn-secondary">
                <GithubIcon size={20} className="mb-1" />
                <span className="ms-2">Github</span>
              </a>
            </div>
            <div className="ms-auto col-md-6">
              <a href={DemoLink} className="btn btn-secondary">
                <LinkIcon size={20} />
                <span className="ms-1">Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
