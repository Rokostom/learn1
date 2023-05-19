import "./style.css";

import photoshopImg from "./items/PS.svg";
import illustratorImg from "./items/AI.svg";
import afterEffectsImg from "./items/AE.svg";
import FigmaImg from "./items/Figma.svg";

import FourStars from "./items/4Stars.jpg";
import ThreeStars from "./items/3Stars.jpg";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 id="skills-id">Skills</h1>
      <p>I work in such programs as</p>
      <div className="skills-content-container">
        <div className="skills-block">
          <img alt="" src={photoshopImg} id="skills-block-img"></img>
          <p>
            Adobe
            <br /> Photoshop
          </p>
          <img alt="" src={FourStars}></img>
        </div>
        <div className="skills-block">
          <img alt="" src={illustratorImg} id="skills-block-img"></img>
          <p>
            Adobe
            <br /> Illustrator
          </p>
          <img alt="" src={ThreeStars}></img>
        </div>
        <div className="skills-block">
          <img alt="" src={afterEffectsImg} id="skills-block-img"></img>
          <p>
            Adobe After
            <br /> Effects
          </p>
          <img alt="" src={FourStars}></img>
        </div>
        <div className="skills-block">
          <img alt="" src={FigmaImg} id="skills-block-img"></img>
          <p>Figma</p>
          <img alt="" src={FourStars}></img>
        </div>
      </div>
    </div>
  );
};

export default Skills;
