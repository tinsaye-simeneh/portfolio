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
            class="text-white ms-4 me-4"
          >
            <GithubIcon size={30} />
          </a>
          <a
            href="https://t.me/TinsayeSimeneh"
            target="_blank"
            class="text-white me-4"
          >
            <TelegramIcon size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/tinsayesimeneh"
            target="_blank"
            class="text-white me-4"
          >
            <LinkedinIcon size={30} />
          </a>
          <a
            href="https://www.behance.net/tinsayesimeneh"
            target="_blank"
            class="text-white me-4"
          >
            <BehanceIcon size={30} />
          </a>
        </div>
        <div class="ms-auto contact-btn">
          <a
            href="/contact"
            class="text-white text-decoration-none me-4 border p-2 rounded
          "
          >
            Get In Touch
          </a>
        </div>
       
      </nav>
    </div>
  );
};

export default Topbar;
