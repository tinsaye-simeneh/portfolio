import React from "react";

import Sidebar from "../components/Sidebar";
import SidebarMobile from "../components/SidebarMobile";
import Topbar from "../components/Topbar";

import { BsGithub as GithubIcon } from "react-icons/bs";
import { ImTelegram as TelegramIcon } from "react-icons/im";
import { AiFillLinkedin as LinkedinIcon } from "react-icons/ai";
import { ImBehance2 as BehanceIcon } from "react-icons/im";

import Image from "../assets/Images/memoji.png";

import '../styles/index.css'

const Home = () => {
  return (
    <>
      <Sidebar HomeIconColor="text-primary" />
      <div className="container main-container bg-dark pb-3">
        <SidebarMobile HomeIconColor="text-primary" />
        <div className="row py-4 mx-auto pb-5 mb-4">
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
            <div class="mx-auto mt-4 mb-5 text-white">
                My Social Links:
                <a
                  href="https://github.com/tinsaye-simeneh"
                  target="_blank"
                  class="text-white ms-4 me-5"
                >
                  <GithubIcon size={30} />
                </a>
                <a
                  href="https://t.me/TinsayeSimeneh"
                  target="_blank"
                  class="text-white me-5"
                >
                  <TelegramIcon size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tinsayesimeneh"
                  target="_blank"
                  class="text-white me-5"
                >
                  <LinkedinIcon size={30} />
                </a>
                <a
                  href="https://www.behance.net/tinsayesimeneh"
                  target="_blank"
                  class="text-white me-5"
                >
                  <BehanceIcon size={30} />
                </a>
              </div>
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
