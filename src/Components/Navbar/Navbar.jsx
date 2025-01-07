import React, { useContext, useEffect, useState } from "react";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Drawer from '@mui/material/Drawer';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { DarkModeContext } from "../../context/DarkModeContext"
import { Link } from "react-router-dom";

import NavbarSocialLinks from "./NavbarSocialLinks";

import { themeColors } from "../../themes/themes";

import "./navbar.css"


const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [hamburgerActive, setHamburgerActive] = useState("false")

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleNavDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const r = document.querySelector(':root');

  r.style.setProperty("--borderWidth", themeColors.borderWidth)

  if (darkMode === "true") {
    r.style.setProperty("--background-color", themeColors.darkColor)
    r.style.setProperty("--text-color", themeColors.lightColor)
    r.style.setProperty("--project-card-background", themeColors.darkProjectCard)
    r.style.setProperty("--bgColor", themeColors.darkBGColor)

  } else {
    r.style.setProperty("--background-color", themeColors.lightColor)
    r.style.setProperty("--text-color", themeColors.darkColor)
    r.style.setProperty("--project-card-background", themeColors.lightProjectCard)
    r.style.setProperty("--bgColor", themeColors.lightBGColor)
  }


  const handleDarkModeClick = () => {
    toggleDarkMode()
  }

  const handleMobileNavClick = () => {
    setDrawerOpen(!drawerOpen)
  }


  return (
    <nav className="navbar-container">
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
          <NavbarSocialLinks />
        </div>
      </div>

      <ul className="navbar-links-desktop">
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






      <div className="navbar-links-mobile">
        <div className="navbar-hamburger-button">
          <img
            alt="Menu button"
            id="navbar-hamburger-button-image"
            onClick={toggleNavDrawer}
            className="navbar-hamburger-button-image-open"
            src={darkMode === "true"
              ? "/assets/images/buttons/menu-open-darkmode.png"
              : "/assets/images/buttons/menu-open.png"}
          />
        </div>
        <Drawer open={drawerOpen} anchor="right" onClose={toggleNavDrawer}>
          <Card
            sx={{
              height: "100%",
              width: "180px",
              backgroundColor:
                darkMode === "true"
                  ? themeColors.darkColor
                  : themeColors.lightColor

            }}
            scroll="paper"
          >
            <div>

            </div>
            <ul className="navbar-mobile-drawer-links">
              <li>
                <Link to={"/about"} style={{ textDecoration: 'none' }}>
                  <button className="navbar-link-button" onClick={handleMobileNavClick}>
                    <div className="navbar-link-item">
                      About
                    </div>
                  </button>
                </Link>
              </li>

              <li>
                <Link to={"/projects"} style={{ textDecoration: 'none' }}>
                  <button className="navbar-link-button" onClick={handleMobileNavClick}>
                    <div className="navbar-link-item">
                      Projects
                    </div>
                  </button>
                </Link>
              </li>

              <li>
                <Link to={"/contact"} style={{ textDecoration: 'none' }}>
                  <button className="navbar-link-button" onClick={handleMobileNavClick}>
                    <div className="navbar-link-item">
                      Contact
                    </div>
                  </button>
                </Link>
              </li>
            </ul>


          </Card>







        </Drawer>


      </div>

      <div className="navbar-darkmode-toggle">
        <img src={darkMode === "true"
          ? "/assets/images/darkmode/lightswitch_on.png"
          : "/assets/images/darkmode/lightswitch_off.png"}
          alt="Dark Mode toggle"
          onClick={() => handleDarkModeClick()} />
      </div>
    </nav>










  )



}

export default Navbar