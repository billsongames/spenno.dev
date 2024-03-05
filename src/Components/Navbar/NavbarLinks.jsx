import React from "react";

import AboutEntry from "../About/AboutEntry";
import "./navbar.css"

const NavbarLinks = () => {
  const arrow= "=>"

  return(
    <div className="navbar-title-links">
      <a href="https://www.linkedin.com/in/paul-spencer-38155a214/" target="blank">
        <AboutEntry id="linkedin" />         
      </a>
      <a href="https://github.com/billsongames" target="blank">
        <AboutEntry id="github" />
      </a>
      <a href="https://billsongames.itch.io/" target="blank">
        <AboutEntry id="itch" />
      </a>
    </div>
  )
}

export default NavbarLinks