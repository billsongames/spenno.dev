import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css"

const Navbar = () => {

  return(
    <div className="navbar__container">
      <div className="navbar__title">
        Paul Spencer
      </div>
      <div className="navbar__links">
        <div>
          <button className="navbar__linkButton">
            <div className="navbar__linkItem">
              About
            </div>            
          </button>
        </div>

        <div>
          <Link to = {"/projects"}>
          <button className="navbar__linkButton">
            <div className="navbar__linkItem">
              Projects
            </div>            
          </button>
          </Link>
        </div>

        <div>
          <button className="navbar__linkButton">
            <div className="navbar__linkItem">
              Contact
            </div>            
          </button>
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