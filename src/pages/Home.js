import React from "react";

import Sidebar from "../components/Sidebar";
import SidebarMobile from "../components/SidebarMobile";
import Topbar from "../components/Topbar";

import Image from "../assets/Images/memoji.png";

import '../styles/index.css'

const Home = () => {
  return (
    <>
      <Sidebar HomeIconColor="text-primary" />
      <div className="container main-container bg-primary">
        <SidebarMobile HomeIconColor="text-primary" />
        <Topbar/>
        <div className="row mt-5 py-5 mx-auto">
          <div className="col-md-6 col-12 mx-auto">
            <img
              src={Image}
              alt="undraw-Developer-re"
              border="0"
              height={400}
            />
          </div>
          <div className="col-md-6 col-12 mt-5">
            <h3 className="text-white">
              Hello, I'm{" "}
              <span className="text-primary">TINSAYE SIMENEH DESSIE</span>
            </h3>
            <h1 className="text-white">
              I'm a <span className="text-primary">Front-End Developer</span>
            </h1>
            <p className="text-white">
              Meticulous web developer with over 3 years of front end experience
              and passion for responsive website design and a firm believer in
              the Desktop-first approach. Assessed UX and UI designs for
              technical feasibility. Implemented new responsive website Design
              and Development approach which increased mobile traffic.
            </p>
            <a className="btn btn-dark border mt-3 me-5" href="/project">See My Work</a>
            <a className="btn btn-primary mt-3" href="/contact">Hire Me</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
