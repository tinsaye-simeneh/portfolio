import React from "react";

import { BsLink45Deg } from "react-icons/bs";

const ExperienceTemplate = ({
  CompanyName,
  Position,
  CompanyLink,
  Timeline,
}) => {
  if (CompanyLink === undefined) {
    CompanyLink = "#";
  }

  return (
    <div>
      <div className="col-md-6 pt-3">
        <a href={CompanyLink} target="_blank" rel="noreferrer">
          <BsLink45Deg className="text-white" />
        </a>
        <h6 className="text-white d-inline">{CompanyName} - </h6>
        <p className="text-white d-inline">{Position}</p>
        <p className="text-white">{Timeline}</p>
      </div>
    </div>
  );
};

export default ExperienceTemplate;
