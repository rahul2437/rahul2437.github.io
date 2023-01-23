import Brightness2Icon from "@mui/icons-material/Brightness2";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme";
import { about, contact, projects, skills } from "../../portfolio";
import "./Navbar.css";
const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);
  const { resume } = about;
  const toggleNavList = () => setShowNavList(!showNavList);

  const downloadFile = async (fileUrl, redirectUrl) => {
    try {
      // Initiate the download
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Rahul-Sheelavantar-Resume.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Open the new URL in a new tab
      window.open(redirectUrl, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        <li className="nav__list-item">
          <a href="#about" onClick={toggleNavList} className="link link--nav">
            Home
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#about" onClick={toggleNavList} className="link link--nav">
            About me
          </a>
        </li>
        {skills.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
        {about.resume && (
          <li className="nav__list-item">
            <span
              onClick={() =>
                downloadFile("Rahul-Sheelavantar-Resume.pdf", resume)
              }
              type="button"
              className="link link--nav"
            >
              Resume
            </span>
          </li>
        )}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <WbSunnyIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
