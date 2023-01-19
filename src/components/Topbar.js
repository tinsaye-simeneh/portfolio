import React from "react";

import {BsGithub as GithubIcon} from "react-icons/bs";
import {ImTelegram as TelegramIcon} from "react-icons/im";
import {AiFillLinkedin as LinkedinIcon} from "react-icons/ai";
import {ImBehance2 as BehanceIcon} from "react-icons/im";

import "../styles/Topbar.css";

const Topbar = ({PageName}) => {
  return (
    <div className="container bg-primary bg-dark me-auto">
      <nav class="navbar navbar-expand-sm shadow-lg p-3 mb-5 top-border">
        <h5 class="ms-3 text-white">{PageName}</h5>
        <div class="ms-auto">
            <a href="#" class="text-white me-5"><GithubIcon size={30} /></a>
            <a href="#" class="text-white me-5"><TelegramIcon size={30} /></a>
            <a href="#" class="text-white me-5"><LinkedinIcon size={30} /></a>
            <a href="#" class="text-white me-5"><BehanceIcon size={30} /></a>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
