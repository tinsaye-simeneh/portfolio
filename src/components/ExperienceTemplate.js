import React from "react";

const ExperienceTemplate = ({ Position, CompanyLink, Timeline }) => {
  if (CompanyLink === undefined){
    CompanyLink = "https://www.google.com/?hl=en";
  }

  return (
    <div>
      <div className="col-md-6 pt-3">
        <a href={CompanyLink} target="_blank" rel="noreferrer">
        <h6 className="text-white">{Position}</h6>
        </a>
        <p className="text-white">{Timeline}</p>
      </div>
    </div>
  );
};

export default ExperienceTemplate;
