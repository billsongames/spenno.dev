import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { DarkModeContext } from "../../context/DarkModeContext"
import { Link } from "react-router-dom";

import NavbarLinks from "./NavbarLinks";

import { themeColors } from "../../themes/themes";

import "./navbar.css"


const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [hamburgerActive, setHamburgerActive] = useState(false)

  const r = document.querySelector(':root');

  r.style.setProperty("--borderWidth", themeColors.borderWidth)

  if (darkMode) {
    r.style.setProperty("--background-color", themeColors.darkColor)
    r.style.setProperty("--text-color", themeColors.lightColor)
    r.style.setProperty("--project-card-background", themeColors.darkProjectCard)

  } else {
    r.style.setProperty("--background-color", themeColors.lightColor)
    r.style.setProperty("--text-color", themeColors.darkColor)
    r.style.setProperty("--project-card-background", themeColors.lightProjectCard)
  }

  

  const handleDarkModeClick = () => {
    toggleDarkMode()
  }

  const handleHamburgerClick = () => {
    setHamburgerActive(!hamburgerActive)

    async function hamburgerFormat() {
      document.querySelector(".navbar-hamburger-links").style.display =
        (document.querySelector(".navbar-hamburger-links").style.display === "flex") ? "none" : "flex"

      document.getElementById("navbar-hamburger-button-image").className =
      (darkMode & hamburgerActive)
      ? "navbar-hamburger-button-image-close-darkmode"

      : (darkMode & document.getElementById("navbar-hamburger-button-image").className === "navbar-hamburger-button-image-close-darkmode")
      ? "navbar-hamburger-button-image-open-darkmode"

      : hamburgerActive
      ? "navbar-hamburger-button-image-close"

      : "navbar-hamburger-button-image-open"
    }

    hamburgerFormat()
  }








  return (
    <div className="navbar-container">
        <div className="navbar-title-container">
          <Link to={"/"}>
            <img className="navbar-title-profilePic" src="/assets/images/profile/ps.jpeg" />
          </Link>
          <div className="navbar-title-text">
            <Link to={"/"} style={{ textDecoration: 'none' }}>
              <div className="navbar-title-name">
                Paul Spencer
              </div>
            </Link>  
            <NavbarLinks />
        </div>

        


      </div>

      <ul className="navbar-links">
        <li>
          <Link to={"/about"} style={{ textDecoration: 'none' }}>
            <button className="navbar-link-button">
              <div className="navbar-link-item">
                About
              </div>
            </button>
          </Link>
        </li>

        <li>
          <Link to={"/projects"} style={{ textDecoration: 'none' }}>
            <button className="navbar-link-button">
              <div className="navbar-link-item">
                Projects
              </div>
            </button>
          </Link>
        </li>

        <li>
          <Link to={"/contact"} style={{ textDecoration: 'none' }}>
            <button className="navbar-link-button">
              <div className="navbar-link-item">
                Contact
              </div>
            </button>
          </Link>
        </li>
      </ul>

      <div id="navbar-hamburger-menu">
        <div className="navbar-hamburger-button" onClick={handleHamburgerClick}>
          <img alt="Menu button" id="navbar-hamburger-button-image"
            className={
            (darkMode & hamburgerActive)
            ? "navbar-hamburger-button-image-close-darkmode"
      
            : (darkMode)
            ? "navbar-hamburger-button-image-open-darkmode"
      
            : hamburgerActive
            ? "navbar-hamburger-button-image-close"
      
            : "navbar-hamburger-button-image-open"
            }
               />
        </div>
        <ul className="navbar-hamburger-links">
          <li>
            <Link to={"/about"} style={{ textDecoration: 'none' }}>
              <button className="navbar-link-button" onClick={handleHamburgerClick}>
                <div className="navbar-link-item">
                  About
                </div>
              </button>
            </Link>
          </li>

          <li>
            <Link to={"/projects"} style={{ textDecoration: 'none' }}>
              <button className="navbar-link-button" onClick={handleHamburgerClick}>
                <div className="navbar-link-item">
                  Projects
                </div>
              </button>
            </Link>
          </li>

          <li>
            <Link to={"/contact"} style={{ textDecoration: 'none' }}>
              <button className="navbar-link-button" onClick={handleHamburgerClick}>
                <div className="navbar-link-item">
                  Contact
                </div>
              </button>
            </Link>
          </li>
        </ul>

      </div>


      <div className="navbar-darkmode-toggle">
        <img src={darkMode
          ? "/assets/images/darkmode/lightswitch_on.png"
          : "/assets/images/darkmode/lightswitch_off.png"}
          alt="Dark Mode toggle"
          onClick={handleDarkModeClick} />
      </div>
    </div>








  )



}

export default Navbar