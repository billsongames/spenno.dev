import React from "react";
import { Link, Outlet } from 'react-router-dom';

import "./projects.css"

import radiogram_logo from "../../assets/images/radiogram/radiogram_logo.png"
import rotadroid_logo from "../../assets/images/rotadroid/rotadroid_logo.png"
import deflektion_logo from "../../assets/images/deflektion/deflektion_logo.png"
import nasa_logo from "../../assets/images/nasa/NASA_logo.png"


const Projects = () => {
  return(
    <div className="projects__container">
      <div className="projects___title">
        Projects
      </div>
      <div>
        Here are some of the projects I've worked on...
      </div>
      
      <div className="projects__nav">
        <div className="projectTile">
          <Link to ={"radiogram"} >
            <img className="projectLogo" src = {radiogram_logo} />
          </Link>
          <div className="projectDescription">
            A radio streaming app to enhance your listening pleasure hjochjshcc kcjoncnc lcpasjcpac
          </div>                   
        </div>
        <div className="projectTile">
          <Link to ={"nasa"}>
            <div className="projectTile__img">
              <img className="projectLogo" src = {nasa_logo} />
            </div>
          </Link>          
        </div>
      </div>

      <div className="projects__nav">
        <div className="projectTile">
          <Link to ={"deflektion"}>
            <div className="projectTile__img">
              <img className="projectLogo" src = {deflektion_logo} />
            </div>
          </Link>          
        </div>
        <div className="projectTile">
          <Link to ={"rotadroid"}>
            <div className="projectTile__img">
              <img className="projectLogo" src = {rotadroid_logo} />
            </div>
          </Link>          
        </div>
      </div>
    </div>
  )
}

export default Projects