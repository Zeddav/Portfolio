import React from "react";
import "./Header.css";
import HeaderButton from "./HeaderButton";
import DarkToggle from "../DarkToggle/DarkToggle";

const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="#hero" className="logo-text">
        ZD
      </a>
      <nav className="nav">
        <HeaderButton txt="À propos" href="#about" />
        <HeaderButton txt="Compétences" href="#skills" />
        <HeaderButton txt="Projets" href="#projects" />
        <HeaderButton txt="Contact" href="#contact" />
      </nav>
      <div className="dark-toggle">{/* <DarkToggle /> */}</div>
    </header>
  );
};

export default Header;
