import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio React",
    description: "Mon portfolio développé avec React et TypeScript.",
    image: "./images/portfolio.png",
    github: "https://github.com/Zeddav/Portfolio",
    techs: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Application de gestion des stages",
    description:
      "Projet universitaire en groupe : une application de gestion des stages, notamment la planification des soutenances finale.",
    image: "./images/stages.png",
    github: "https://github.com/Zeddav/suivi-stage",
    techs: ["Angular", "Laravel", "MySql"],
  },
  {
    title: "Projet Docker",
    description:
      "Déploiement d'une application web Angular + Laravel avec Docker",
    image: "./images/docker.png",
    github: "https://github.com/Zeddav/Projet-Docker",
    techs: ["Docker"],
  },
  {
    title: "Lecteur de diaporamas",
    description: "Lecteur de diaporamas Qt",
    image: "./images/project3.png",
    github: "https://github.com/Zeddav/S2.01-Lecteur-de-Diapositives-Qt",
    techs: ["Qt", "C++"],
  },
];

const Projects: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>(0);
  const scrollPositionRef = useRef(0);
  const startTimeRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef(0);
  const dragStartPositionRef = useRef(0);

  const duplicatedProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!trackRef.current) return;

      if (!isPaused && !isDraggingRef.current) {
        if (startTimeRef.current === 0) {
          startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        // Vitesse de défilement (pixels par seconde)
        const speed = 80; // 80px par seconde
        scrollPositionRef.current =
          (scrollPositionRef.current + speed * (elapsed / 1000)) %
          (trackRef.current.scrollWidth / 3);
        startTimeRef.current = timestamp;

        trackRef.current.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Gestion du drag manuel
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartRef.current = e.clientX;
    dragStartPositionRef.current = scrollPositionRef.current;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return;

    const delta = e.clientX - dragStartRef.current;
    let newPosition = dragStartPositionRef.current - delta;

    // Boucle infinie
    const maxScroll = trackRef.current.scrollWidth / 3;
    if (newPosition < 0) {
      newPosition += maxScroll;
      dragStartPositionRef.current = newPosition;
      dragStartRef.current = e.clientX;
    } else if (newPosition > maxScroll) {
      newPosition -= maxScroll;
      dragStartPositionRef.current = newPosition;
      dragStartRef.current = e.clientX;
    }

    scrollPositionRef.current = newPosition;
    trackRef.current.style.transform = `translateX(-${scrollPositionRef.current}px)`;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsPaused(false);
    startTimeRef.current = 0;
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      handleMouseUp();
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <p className="section-subtitle">
        Projets personnels et universitaires (les projets pros sont top secrets
        🤫)
      </p>

      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="carousel-track" ref={trackRef}>
            {duplicatedProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                    >
                      <FaGithub /> Voir sur GitHub
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-techs">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <button
          className={`auto-play-btn ${!isPaused ? "playing" : ""}`}
          onClick={() => setIsPaused(!isPaused)}
        >
          {!isPaused ? "⏸ Pause" : "▶ Play"}
        </button>
        <div className="info-text">
          👆 Clique-glisse pour naviguer manuellement
        </div>
      </div>
    </section>
  );
};

export default Projects;
