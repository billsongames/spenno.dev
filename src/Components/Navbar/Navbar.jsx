import React, {useContext} from "react";
import { DarkModeContext } from "../../context/DarkModeContext"
import { Link } from "react-router-dom";

import "./navbar.css"


const Navbar = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  const r = document.querySelector(':root');

  if (darkMode) {
    console.log("dark mode on")
  } else {
    console.log("dark mode off")
  }

  const handleClick = () => {
    toggleDarkMode()
  }

  return(
    <div className="navbar-container">
      <div>
        <Link to = {"/"} style={{ textDecoration: 'none' }}>
          <div className="navbar-title-container">
            <img className="navbar-title-profilePic" src="/assets/images/profile/ps.jpeg"/>
              <div className="navbar-title">
                Paul Spencer
              </div>
          </div>
        </Link>

      </div>

      <div className="navbar-links">

        <div>
          <Link to = {"/about"} style={{ textDecoration: 'none' }}>
            <button className="navbar-link-button">
              <div className="navbar-link-item">
                About
              </div>
            </button>
          </Link>
        </div>

        <div>
          <Link to = {"/projects"} style={{ textDecoration: 'none' }}>
            <button className="navbar-link-button">
              <div className="navbar-link-item">
                Projects
              </div>
            </button>
          </Link>
        </div>

        <div>
          <Link to = {"/contact"} style={{ textDecoration: 'none' }}>
            <button className="navbar-link-button">
              <div className="navbar-link-item">
                Contact
              </div>
            </button>
          </Link>
        </div>

        <div className="navbar-darkmode-toggle">
          <img src={darkMode
            ? "/assets/images/darkmode/lightswitch_on.png"
            : "/assets/images/darkmode/lightswitch_off.png"}
            alt="Dark Mode toggle"
            onClick={handleClick}/>

        </div>
      </div>
    </div>
  )



}

export default Navbar