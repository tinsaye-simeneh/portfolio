import React from "react";

import { BsLink45Deg } from "react-icons/bs";

const EducationTemplate = ({
  SchoolName,
  EducationType,
  SchoolLink,
  Timeline,
}) => {
  if (SchoolLink === undefined) {
    SchoolLink = "#";
  }

  return (
    <div>
      <div className="col-md-12 pt-3">
        <h6 className="text-white">
          <a href={SchoolLink} target="_blank" rel="noreferrer">
            <BsLink45Deg className="text-white" />
          </a>
          {SchoolName}{" "}
        </h6>
        <span className="text-white">{EducationType}</span>
        <p className="text-white">{Timeline}</p>
      </div>
    </div>
  );
};

export default EducationTemplate;
