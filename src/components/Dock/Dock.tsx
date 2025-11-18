import React from "react";
import "./Dock.css";
import logo from "/logo.png";

interface DockProps {
  openApp: (app: string) => void;
   closeAll: () => void; 
}

const Dock: React.FC<DockProps> = ({ openApp,closeAll }) => {
  const apps = ["About", "Skills", "Projects", "CV", "Contact"];

  return (
    <div className="dock">
      <img src={logo} alt="Logo OS" className="dock-logo"  onClick={closeAll}/>
      {apps.map((app) => (
        <button key={app} className="dock-button" onClick={() => openApp(app)}>
          {app}
        </button>
      ))}
    </div>
  );
};

export default Dock;
