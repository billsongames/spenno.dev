import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css"


const Navbar = () => {

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

        <div>
          <button className="navbar-link-button">
            <div className="navbar-link-item">
              dark mode
            </div>
          </button>
        </div>
      </div>
    </div>
  )



}

export default Navbar