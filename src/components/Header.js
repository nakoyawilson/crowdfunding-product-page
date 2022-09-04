import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import closeMenu from "../images/icon-close-menu.svg";
import "./Header.css";

const Header = ({ navIsOpen, toggleNav, closeNav }) => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="" className="logo" />
        <button
          onClick={toggleNav}
          aria-label={navIsOpen ? "Close Menu" : "Open Menu"}
          className="menu-btn"
        >
          <img
            src={navIsOpen ? closeMenu : hamburger}
            alt=""
            className="menu-btn-icon"
          />
        </button>
        <nav className={`nav${navIsOpen ? " open" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="/" onClick={closeNav} className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/" onClick={closeNav} className="nav-link">
                Discover
              </a>
            </li>
            <li>
              <a href="/" onClick={closeNav} className="nav-link">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
