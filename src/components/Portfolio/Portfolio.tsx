import React from "react";
import "./Portfolio.css";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Portfolio;
