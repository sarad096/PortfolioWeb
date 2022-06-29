import { React, useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const getActiveLink = (value) => {
    setActiveLink(value);
    setIsNavExpanded(!isNavExpanded);
  };
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      <header className={navbar ? "navbar active" : "navbar"}>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <GiHamburgerMenu className="hicon" />
        </button>
        <nav
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={activeLink === "home" ? "isactive" : ""}
                onClick={() => getActiveLink("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#project"
                className={activeLink === "projects" ? "isactive" : ""}
                onClick={() => getActiveLink("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#tool"
                className={activeLink === "tools" ? "isactive" : ""}
                onClick={() => getActiveLink("tools")}
              >
                Tools
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === "contact" ? "isactive" : ""}
                onClick={() => getActiveLink("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
