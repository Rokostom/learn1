import { useState } from "react";

import "./style.css";
import startscreenImg from "./items/startscreen-photo.svg";
import startscreenImgMobile from "./items/startscreen-photo-mobile.svg";

import Navbar from "./Navbar/Navbar";

import hmbrg from "./items/menu-button.svg";

const Startscreen = () => {
  const rtstyle = {
    "font-weight": "bold",
  };

  const [brgState, setBrgState] = useState(true);

  return (
    <div className="startscreen-container">
      <Navbar value={brgState} />
      <div className="startscreen-content">
        <div className="startscreen-content-box">
          <h1>
            Denis <br />
            Novik
          </h1>
          <p id="dnabout">
            UX | UI designer <br /> 24 years old, Minsk
          </p>
        </div>
        <button id="hmbrg-button" onClick={() => setBrgState(!brgState)}>
          <img alt="" src={hmbrg}></img>
        </button>
        <p id="lang">
          <span style={rtstyle}>ENG</span> | RU
        </p>
      </div>
      <img alt="Denis Novic" src={startscreenImg} id="scrnimg"></img>
      <img
        alt="Denis Novic"
        src={startscreenImgMobile}
        id="scrnimg-mobile"
      ></img>
    </div>
  );
};

export default Startscreen;
