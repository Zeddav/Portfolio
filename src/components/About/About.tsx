import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="intro">
        <h2>À propos de moi</h2>
        <p>
          Développeuse web, spécialisée en React, j'aime créer des interfaces
          claires, efficaces… et jolies tant qu'à faire.
          <br />
          <br />
          Entre deux lignes de code, j'essaie de comprendre pourquoi tout
          marchait il y a 5 minutes...
        </p>
      </div>

      <VerticalTimeline lineColor="rgba(74, 144, 226, 0.3)">
        <VerticalTimelineElement
          date="2020 – 2023"
          contentStyle={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(74, 144, 226, 0.5)",
          }}
          icon={<FaSchool />}
          iconStyle={{
            background: "linear-gradient(135deg, #4a90e2, #6b46c1)",
            color: "#fff",
            boxShadow: "0 0 0 4px rgba(74, 144, 226, 0.3)",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Lycée - Baccalauréat général section européenne
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mathématiques & NSI
          </h4>
          <p>
            En section européenne, avec les spécialités Mathématiques et NSI,
            j'ai développé des bases en programmation, en algorithmique et en
            raisonnement logique.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2023 – 2026"
          contentStyle={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(74, 144, 226, 0.5)",
          }}
          icon={<FaUserGraduate />}
          iconStyle={{
            background: "linear-gradient(135deg, #4a90e2, #6b46c1)",
            color: "#fff",
            boxShadow: "0 0 0 4px rgba(74, 144, 226, 0.3)",
          }}
        >
          <h3 className="vertical-timeline-element-title">BUT Informatique</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Parcours réalisation d'applications
          </h4>
          <p>
            Au cours de mon BUT Informatique, je me forme à la conception et au
            développement d'applications web et logicielles. <br />
            J'y acquiers des compétences en programmation, bases de données et
            gestion de projet, à travers des projets concrets réalisés en
            équipe.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Depuis 2024"
          contentStyle={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(74, 144, 226, 0.5)",
          }}
          icon={<FaLaptopCode />}
          iconStyle={{
            background: "linear-gradient(135deg, #4a90e2, #6b46c1)",
            color: "#fff",
            boxShadow: "0 0 0 4px rgba(74, 144, 226, 0.3)",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Alternance Développeuse Web
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Axiome Solution
          </h4>
          <p>
            En alternance chez Axiome Solution, je participe au développement de
            solutions web au sein d'une équipe projet. <br />
            J'interviens sur des technologies de l'écosystème Microsoft
            (SharePoint, Azure) et contribue à répondre à des besoins concrets,
            en lien direct avec les clients.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default About;
