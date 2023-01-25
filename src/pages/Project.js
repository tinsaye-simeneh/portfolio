import React from "react";

import Sidebar from "../components/Sidebar";
import SidebarMobile from "../components/SidebarMobile";
import Topbar from "../components/Topbar";
import ProjectCard from "../components/ProjectCard";

import "../styles/index.css";

const Project = () => {
  return (
    <>
      <Sidebar ProjectIconColor="text-primary" />
      <div className="container main-container bg-dark">
        <SidebarMobile ProjectIconColor="text-primary" />
        <div className="row mt-5 row-card mx-auto px-3">
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
          <div className="row bg-dark row-card mx-auto px-3">
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
          <div className="row bg-dark row-card mx-auto px-3">
            <ProjectCard
              title="Portfolio Site"
              GithubLink="https://github.com/tinsaye-simeneh/portfolio-site-template2"
              LiveLink="http://portfolio-ochre-rho-14.vercel.app/"
            />
            <ProjectCard
              title="ET Construction"
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
    </>
  );
};

export default Project;
