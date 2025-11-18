import React, { useState } from "react";
import "./Window.css";

interface WindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  zIndex: number;
  onClickHeader?: () => void;
}

const Window: React.FC<WindowProps> = ({ title, onClose, children, zIndex, onClickHeader }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    onClickHeader?.();
  };

  const onDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dragging) {
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const endDrag = () => setDragging(false);

  return (
    <div
      className="window"
      style={{ top: position.y, left: position.x, zIndex }}
      onMouseMove={onDrag}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
    >
      <div className="window-header" onMouseDown={startDrag}>
        <span>{title}</span>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
};

export default Window;
