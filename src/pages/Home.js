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
      <div className="container main-container bg-dark">
        <SidebarMobile HomeIconColor="text-primary" />
        <Topbar/>
        <div className="row py-4 mx-auto">
          <div className="col-md-6 col-12 mx-auto">
            <img
              src={Image}
              alt="undraw-Developer-re"
              className="img-fluid home-img"
              border="0"
              height={400}
            />
          </div>
          <div className="col-md-6 col-12 home-txt">
            <h3 className="text-white">
              Hey, I'm{" "}
              <span className="text-primary">TINSAYE SIMENEH</span>
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
            <div className="home-btn">
            <a className="btn btn-dark border my-2 me-5" href="/project">See My Work</a>
            <a className="btn btn-primary my-2" href="/contact">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
