import "./style.css";
import startscreenImg from "./items/BSPP2266.png";

import Navbar from "./Navbar/Navbar";

// import { Link } from "react-scroll";

const Startscreen = () => {
  const rtstyle = {
    "font-weight": "bold",
  };
  return (
    <div className="startscreen-container">
      {/* <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="about-id" spy={true} smooth={true} duration={500}>
              About me
            </Link>
          </li>
          <li>
            <Link to="skills-id" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="portf-id" spy={true} smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="cont-id" spy={true} smooth={true} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav> */}
      <Navbar />
      <div className="startscreen-content">
        <h1>
          Denis <br />
          Novik
        </h1>
        <p id="dnabout">
          UX | UI designer <br /> 24 years old, Minsk
        </p>
        <p id="lang">
          <span style={rtstyle}>ENG</span> | RU
        </p>
      </div>
      <img alt="Denis Novic" src={startscreenImg} id="scrnimg"></img>
    </div>
  );
};

export default Startscreen;
