import "./style.css";

import LinkedInLogo from "./items/linkedInLogo.svg";
import InstagramLogo from "./items/InstagramLogo.svg";
import BehanceLogo from "./items/BehanceLogo.svg";
import DribbleLogo from "./items/DribbleLogo.svg";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1 id="cont-id">Contacts</h1>
      <p>
        Want to know more or just chat?
        <br /> You are welcome!
      </p>
      <button>Send message</button>
      <div className="socials-logos-container">
        <a href="/">
          <img alt="" src={LinkedInLogo}></img>
        </a>
        <a href="/">
          <img alt="" src={InstagramLogo}></img>
        </a>
        <a href="/">
          <img alt="" src={BehanceLogo}></img>
        </a>
        <a href="/">
          <img alt="" src={DribbleLogo}></img>
        </a>
      </div>
      <p id="socials-description">
        Like me on
        <br /> LinkedIn, Instagram, Behance, Dribble
      </p>
    </div>
  );
};

export default Contacts;
