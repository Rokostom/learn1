import "./style.css";

import projectOne from "./items/Store-project.svg";
import projectTwo from "./items/Reebok-project.svg";
import projectThree from "./items/Braun-project.svg";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 id="portf-id">Portfolio</h1>
      <img alt="" src={projectOne}></img>
      <a href="/">Online fashion store - Homepage</a>
      <img alt="" src={projectTwo}></img>
      <a href="/">Reebok Store - Concept</a>
      <img alt="" src={projectThree}></img>
      <a href="/">Braun Landing Page - Concept</a>
    </div>
  );
};

export default Portfolio;
