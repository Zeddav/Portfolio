import React from "react";
import "./Hero.css";
import Loader from "../Loader/Loader";
import DownloadBtn from "./Download";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <Loader />
      </div>

      <div className="hero-content">
        <h1>
          Zélie <span>DAVAUD</span>
        </h1>

        <p>Développeuse web</p>

        <div className="hero-buttons">
          <DownloadBtn />
        </div>
      </div>
      <a href="#about" className="scroll-down">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L12 18L17 13M7 6L12 11L17 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
