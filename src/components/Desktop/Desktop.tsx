import React from "react";
import Dock from "../Dock/Dock";
import Window from "../Window/Window";
import AboutMe from "../apps/AboutMe";
import Skills from "../apps/Skills";
import Projects from "../apps/Projects";
import Cv from "../apps/Cv";
import Contact from "../apps/Contact";
import "./Desktop.css";
import { useWindowManager } from "../hook/windowManager";

interface DesktopIcon {
  id: string;
  name: string;
  icon: string;
  x: number;
  y: number;
}

const icons: DesktopIcon[] = [
  { id: "About", name: "About", icon: "👤", x: 50, y: 50 },
  { id: "Skills", name: "Skills", icon: "💻", x: 50, y: 150 },
  { id: "Projects", name: "Projects", icon: "📂", x: 50, y: 250 },
  { id: "CV", name: "CV", icon: "📄", x: 200, y: 50 },
  { id: "Contact", name: "Contact", icon: "✉️", x: 200, y: 150 },
];

const Desktop: React.FC = () => {
  const { windows, openWindow, closeWindow, closeAllWindows, bringToFront } =
    useWindowManager();

  const renderWindow = (id: string) => {
    let content;
    switch (id) {
      case "About":
        content = <AboutMe />;
        break;
      case "Skills":
        content = <Skills />;
        break;
      case "Projects":
        content = <Projects />;
        break;
      case "CV":
        content = <Cv />;
        break;
      case "Contact":
        content = <Contact />;
        break;
      default:
        content = null;
    }

    return (
      <Window
        key={id}
        title={id}
        onClose={() => closeWindow(id)}
        zIndex={windows.find((w) => w.id === id)?.zIndex || 1}
        onClickHeader={() => bringToFront(id)}
      >
        {content}
      </Window>
    );
  };

  return (
    <div className="desktop">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="desktop-icon"
          style={{ top: icon.y, left: icon.x }}
          onDoubleClick={() => openWindow(icon.id)}
        >
          <span className="icon">{icon.icon}</span>
          <span className="icon-label">{icon.name}</span>
        </div>
      ))}

      {windows.map((w) => renderWindow(w.id))}

      <Dock openApp={openWindow} closeAll={closeAllWindows} />
    </div>
  );
};

export default Desktop;
