import { Link, animateScroll as scroll } from "react-scroll";

import "./style.css";

const Navbar = ({ value }) => {
  let b = () => {
    let a = { value };
    return a === true ? "navbar-container navbar-modified" : "navbar-container";
  };
  return (
    <>
      <nav className={b()}>
        <ul>
          <li>
            <p onClick={() => scroll.scrollToTop()}>Home</p>
          </li>
          <li>
            <Link to="about-id" spy={true} smooth={true} duration={600}>
              About me
            </Link>
          </li>
          <li>
            <Link to="skills-id" spy={true} smooth={true} duration={600}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="portf-id" spy={true} smooth={true} duration={600}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="cont-id" spy={true} smooth={true} duration={600}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
