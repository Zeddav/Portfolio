import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#about">À propos</a>
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="contact-info">
            <li>
              <FaEnvelope />
              <a href="mailto:zelie.davaud@gmail.com">zelie.davaud@gmail.com</a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span>France</span>
            </li>
          </ul>
          <div className="social-links">
            <a
              href="https://github.com/Zeddav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/z%C3%A9lie-davaud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zélie DAVAUD. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
