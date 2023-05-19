import "./style.css";
import startscreenImg from "./items/startscreen-photo.svg";

import Navbar from "./Navbar/Navbar";

const Startscreen = () => {
  const rtstyle = {
    "font-weight": "bold",
  };
  return (
    <div className="startscreen-container">
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
