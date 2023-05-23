import { useRef, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./style.css";
import startscreenImg from "./items/startscreen-photo.svg";
import startscreenImgMobile from "./items/startscreen-photo-mobile.svg";

import hmbrg from "./items/menu-button.svg";
import xhmbrg from "./items/x-button.svg";

const Startscreen = () => {
  const rtstyle = {
    "font-weight": "bold",
  };

  const [brgState, setBrgState] = useState(false);

  const imgchange = () => {
    return brgState === false ? hmbrg : xhmbrg;
  };

  const buttonRef = useRef(null);
  let handleButton1Click;
  const screenWidth = window.innerWidth;
  if (screenWidth <= 640) {
    handleButton1Click = () => buttonRef.current.click();
  } else {
    handleButton1Click = () => {};
  }

  return (
    <div className="startscreen-container">
      <nav
        className={
          brgState === true
            ? "navbar-container navbar-modified"
            : "navbar-container"
        }
      >
        <ul>
          <li>
            <p onClick={() => scroll.scrollToTop()}>Home</p>
          </li>
          <li>
            <Link
              to="about-id"
              spy={true}
              smooth={true}
              duration={600}
              onClick={() => handleButton1Click()}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="skills-id"
              spy={true}
              smooth={true}
              duration={600}
              onClick={() => handleButton1Click()}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="portf-id"
              spy={true}
              smooth={true}
              duration={600}
              onClick={() => handleButton1Click()}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="cont-id"
              spy={true}
              smooth={true}
              duration={600}
              onClick={() => handleButton1Click()}
            >
              Contacts
            </Link>
          </li>
        </ul>
        <p id="lang-mob">
          <span style={rtstyle}>ENG</span> | RU
        </p>
      </nav>
      <div className="startscreen-content">
        <div className="startscreen-content-box">
          <h1>
            Denis <br />
            Novik
          </h1>
          <p id="dnabout-mob">
            UX | UI designer <br /> 24 years old, Minsk
          </p>
        </div>
        <p id="dnabout">
          UX | UI designer <br /> 24 years old, Minsk
        </p>
        <button
          ref={buttonRef}
          id="hmbrg-button"
          onClick={() => setBrgState(!brgState)}
        >
          <img alt="" src={imgchange()}></img>
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
