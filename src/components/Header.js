import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import closeMenu from "../images/icon-close-menu.svg";
import "./Header.css";

const Header = ({ navIsOpen, toggleNav, closeNav }) => {
  return (
    <header>
      <img src={logo} alt="" />
      <button onClick={toggleNav}>
        <img src={navIsOpen ? closeMenu : hamburger} alt="" />
      </button>
      <nav className="nav">
        <ul>
          <li>
            <a href="/" onClick={closeNav}>
              About
            </a>
          </li>
          <li>
            <a href="/" onClick={closeNav}>
              Discover
            </a>
          </li>
          <li>
            <a href="/" onClick={closeNav}>
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
