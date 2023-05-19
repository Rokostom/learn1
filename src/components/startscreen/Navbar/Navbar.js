import { Link, animateScroll as scroll } from "react-scroll";

import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul>
        <li>
          <p onClick={() => scroll.scrollToTop()}>Home</p>
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
    </nav>
  );
};

export default Navbar;
