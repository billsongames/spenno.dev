import React from "react";
import { Link, Outlet } from 'react-router-dom';

import "./projects.css"

const Projects = () => {
  return(
    <div className="projects__container">
      Projects
      <div className="projects__nav">
        <div>
          <Link to ={"radiogram"}>
            radiogram
          </Link>          
        </div>
        <div>
          NASA
        </div>
        <div>
          Deflektion
        </div>
        <div>
          Rotadroid
        </div>
      </div>
    </div>
  )
}

export default Projects