import React from "react";

import { BsGithub as GithubIcon } from "react-icons/bs";
import { ImTelegram as TelegramIcon } from "react-icons/im";
import { AiFillLinkedin as LinkedinIcon } from "react-icons/ai";
import { ImBehance2 as BehanceIcon } from "react-icons/im";

import { CiLight as ThemeIcon } from "react-icons/ci";

import "../styles/Topbar.css";

const Topbar = () => {
  return (
    <div className="container bg-primary bg-dark top-border">
      <nav class="navbar navbar-expand-sm shadow-lg py-3">
        <div class="ml-auto">
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
            class="text-white"
          >
            <BehanceIcon size={30} />
          </a>
        </div>
        <div class="ms-auto">
          <a
            href="#"
            class="text-white me-4
          "
          >
            <ThemeIcon size={30} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
