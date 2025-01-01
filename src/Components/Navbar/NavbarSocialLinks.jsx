import React from "react";

import AboutEntry from "../About/AboutEntry";
import "./navbar.css"

const NavbarSocialLinks = () => {
  const arrow= "=>"

  return(
    <nav className="navbar-title-links">
      <a href="https://www.linkedin.com/in/paul-spencer-38155a214/" target="blank">
        <AboutEntry id="linkedin-square" />         
      </a>
      <a href="https://github.com/billsongames" target="blank">
        <AboutEntry id="github-square" />
      </a>
      <a href="https://billsongames.itch.io/" target="blank">
        <AboutEntry id="itch-square" />
      </a>
      <a href="mailto:spennodev@gmail.com" target="blank">
        <AboutEntry id="email" />
      </a>
    </nav>

  )
}

export default NavbarSocialLinks