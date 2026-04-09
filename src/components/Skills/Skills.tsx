import "./Skills.css";
import { useState, type JSX } from "react";

import {
  FaReact,
  FaDocker,
  FaJava,
  FaGithub,
  FaAngular,
  FaLaravel,
  FaGulp,
} from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";

import { DiMysql } from "react-icons/di";
import { TbBrandThreejs, TbBrandPython } from "react-icons/tb";
import {
  SiMongodb,
  SiCplusplus,
  SiSharp,
  SiPostman,
  SiZod,
  SiC,
  SiSonarqubecloud,
  SiEslint,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FiFigma } from "react-icons/fi";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { MdOutlineEngineering } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

interface Skill {
  name: string;
  icon: JSX.Element;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Design",
    icon: "🎨",
    skills: [
      { name: "React", icon: <FaReact />, level: 85 },
      { name: "Angular", icon: <FaAngular />, level: 70 },
      { name: "ThreeJS", icon: <TbBrandThreejs />, level: 60 },
      { name: "Figma", icon: <FiFigma />, level: 70 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "PHP/Laravel", icon: <FaLaravel />, level: 75 },
      { name: "Python", icon: <TbBrandPython />, level: 65 },
      { name: "Java", icon: <FaJava />, level: 60 },
    ],
  },
  {
    title: "Langages Système",
    icon: "🔧",
    skills: [
      { name: "C++", icon: <SiCplusplus />, level: 55 },
      { name: "C#", icon: <SiSharp />, level: 60 },
      { name: "C", icon: <SiC />, level: 50 },
    ],
  },
  {
    title: "Gestion des Données",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 75 },
      { name: "MySQL", icon: <DiMysql />, level: 80 },
      { name: "Zod", icon: <SiZod />, level: 70 },
    ],
  },
  {
    title: "DevOps & Outils",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", icon: <FaGithub />, level: 90 },
      { name: "Azure", icon: <VscAzure />, level: 65 },
      { name: "Docker", icon: <FaDocker />, level: 70 },
      { name: "Postman", icon: <SiPostman />, level: 85 },
    ],
  },
  {
    title: "Écosystème Microsoft",
    icon: "🌐",
    skills: [
      { name: "SharePoint", icon: <MdOutlineEngineering />, level: 85 },
      { name: "Teams", icon: <BsMicrosoftTeams />, level: 90 },
      { name: "Gulp", icon: <FaGulp />, level: 90 },
    ],
  },
  {
    title: "Qualité & Standards",
    icon: "📋",
    skills: [
      { name: "SonarQube", icon: <SiSonarqubecloud />, level: 85 },
      { name: "Eslint", icon: <SiEslint />, level: 90 },
    ],
  },
  {
    title: "Soft Skills & gestion",
    icon: "🤝",
    skills: [
      { name: "Adaptabilité", icon: <CgArrowsExchangeAlt />, level: 100 },
      { name: "Travail en équipe", icon: <HiUserGroup />, level: 100 },
      { name: "Agile/Scrum", icon: <MdOutlineEngineering />, level: 90 },
    ],
  },
];

const Skills = () => {
  // State pour suivre quelles compétences ont été survolées
  const [hoveredSkills, setHoveredSkills] = useState<Record<string, boolean>>(
    {},
  );

  const handleMouseEnter = (categoryIndex: number, skillIndex: number) => {
    const key = `${categoryIndex}-${skillIndex}`;
    setHoveredSkills((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Compétences</h2>

      <div className="categories">
        {skillCategories.map((category, categoryIndex: number) => (
          <div className="category-card" key={categoryIndex}>
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>

            <div className="skills-container">
              {category.skills.map((skill, skillIndex: number) => {
                const key = `${categoryIndex}-${skillIndex}`;
                const isHovered = hoveredSkills[key];

                return (
                  <div
                    className={`skill-card ${isHovered ? "revealed" : ""}`}
                    key={skillIndex}
                    style={
                      { "--level": `${skill.level}%` } as React.CSSProperties
                    }
                    onMouseEnter={() =>
                      handleMouseEnter(categoryIndex, skillIndex)
                    }
                  >
                    <div
                      className="progress-fill-bg"
                      style={{ width: isHovered ? `${skill.level}%` : "0%" }}
                    />
                    <span className="icon">{skill.icon}</span>
                    <span className="name">{skill.name}</span>
                    <span
                      className={`level-percent ${isHovered ? "visible" : ""}`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
