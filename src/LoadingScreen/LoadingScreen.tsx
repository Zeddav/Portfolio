import React, { useEffect, useState } from "react";
import Desktop from "../components/Desktop/Desktop";

const LoadingScreen: React.FC = () => {
  const [showDesktop, setShowDesktop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDesktop(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showDesktop) return <Desktop />;

  return <div className="loading-screen"></div>;
};

export default LoadingScreen;
