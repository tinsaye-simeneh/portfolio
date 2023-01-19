import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ProjectCard from "../components/ProjectCard";

import "../styles/Project.css";

const Project = () => {
  return (
    <>
      <Sidebar ProjectIconColor="text-primary" />
      <div className="container my-4 bg-dark me-auto me-5 ps-5">
        <Topbar PageName="Project" />
        <div className="border border-white mt-5">
          <div className="row bg-dark py-5 mx-auto p-3 px-5">
            <ProjectCard
              title="Glory Sports Bet"
              GithubLink="https://github.com/tinsaye-simeneh/Glory-sports_bet"
            />
            <ProjectCard
              title="tin.et"
              GithubLink="https://github.com/tinsaye-simeneh/tin.et"
              LiveLink="https://tin-et.vercel.app/"
            />
            <ProjectCard
              title="Weather App"
              GithubLink="https://github.com/tinsaye-simeneh/Weather-app"
              LiveLink="http://weather-app-cyan-three.vercel.app/"
            />
          </div>
          <div className="row bg-dark pb-5 mx-auto p-3 px-5">
            <ProjectCard
              title="Utopix E-Learning"
              GithubLink="https://github.com/utopix-et/eLearning"
            />
            <ProjectCard
              title="Utopix Portfolio"
              GithubLink="https://github.com/tinsaye-simeneh/utopix_portfolio"
              LiveLink="https://utopixtechnologies.vercel.app/"
            />
            <ProjectCard
              title="Ruth Coffee"
              GithubLink="https://github.com/tinsaye-simeneh/Ruth_coffee"
              LiveLink="https://ruth-coffee.vercel.app/"
            />
          </div>
          <div className="row bg-dark pb-5 mx-auto p-3 px-5">
            <ProjectCard
              title="Portfolio Site Template"
              GithubLink="https://github.com/tinsaye-simeneh/portfolio-site-template2"
              LiveLink="http://portfolio-ochre-rho-14.vercel.app/"
            />
            <ProjectCard
              title="ET COnstruction"
              GithubLink="https://github.com/tinsaye-simeneh/ET_construction"
              LiveLink="https://et-construction.vercel.app/"
            />
            <ProjectCard
              title="Landing Page"
              GithubLink="https://github.com/tinsaye-simeneh/Frontend-Mentor-Landing-with_dropdown"
              LiveLink="https://fm-landing.vercel.app/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
