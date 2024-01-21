import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css"
import profile_pic from "../../assets/images/profile/ps.jpeg"

const Navbar = () => {

  return(
    <div className="navbar__container">

      <div>
        <Link to = {"/"} style={{ textDecoration: 'none' }}>
          <div className="navbar__titleContainer">
            <img className="navbar__titleProfilePic" src={profile_pic}/>
              <div className="navbar__title">
                Paul Spencer
              </div> 
          </div>  
        </Link>

      </div>

      <div className="navbar__links">

        <div>
          <Link to = {"/about"} style={{ textDecoration: 'none' }}>
            <button className="navbar__linkButton">
              <div className="navbar__linkItem">
                About
              </div>            
            </button>
          </Link>
        </div>

        <div>
          <Link to = {"/projects"} style={{ textDecoration: 'none' }}>
            <button className="navbar__linkButton">
              <div className="navbar__linkItem">
                Projects
              </div>            
            </button>
          </Link>
        </div>

        <div>
          <Link to = {"/contact"} style={{ textDecoration: 'none' }}>
            <button className="navbar__linkButton">
              <div className="navbar__linkItem">
                Contact
              </div>            
            </button>
          </Link>
        </div>

        <div>
          <button className="navbar__linkButton">
            <div className="navbar__linkItem">
              dark mode
            </div>            
          </button>
        </div>
      </div>
    </div>  
  )



}

export default Navbar