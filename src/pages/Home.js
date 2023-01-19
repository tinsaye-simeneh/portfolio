import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import Image from "../assets/Images/memoji.png";

const Home = () => {
  return (
    <>
    <Sidebar />
    <div className="container bg-primary mt-4 bg-dark me-auto">
      <Topbar />
      <div className="row">
        <div className="col-md-6 col-12">
          <img src={Image} alt="undraw-Developer-re" border="0" height={400} />
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
            and passion for responsive website design and a firm believer in the
            Desktop-first approach. Assessed UX and UI designs for technical feasibility.
            Implemented new responsive website Design and Development approach which increased mobile traffic.
          </p>
          <button className="btn btn-primary mt-3">Hire Me</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
