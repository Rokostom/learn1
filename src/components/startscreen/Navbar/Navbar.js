import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar-container">
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
    </nav>
  );
};

export default Navbar;
