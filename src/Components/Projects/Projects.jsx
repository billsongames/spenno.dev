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
          <div className="projectLogo">
            <img src = {radiogram_logo} />
            <div className="projectDescription">
              <div className="projectDescription__text">
                A radio streaming app to enhance your listening pleasure
              </div>
              <div>
                <Link to ={"radiogram"} className="projectLink">
                  <button className="navbar__linkButton">
                    <div className="navbar__linkItem">
                      More info
                    </div>            
                  </button>
                </Link>
              </div>            
            </div>                   
          </div>
        </div>

        <div className="projectTile">
          <div className="projectLogo">
            <img src = {nasa_logo} />
            <div className="projectDescription">
              <div className="projectDescription__text">
              Marvel at the beauty of the universe with a NASA image search
              </div>
              <div>
                <Link to ={"nasa"} className="projectLink">
                  <button className="navbar__linkButton">
                    <div className="navbar__linkItem">
                      More info
                    </div>            
                  </button>
                </Link>
              </div>            
            </div>                   
          </div>
        </div>
      </div>

      <div className="projects__nav">
        <div className="projectTile">
          <div className="projectLogo">
            <img src = {deflektion_logo} />
            <div className="projectDescription">
              <div className="projectDescription__text">
                A retro infused brain workout that makes you think ahead
              </div>
              <div>
                <Link to ={"deflektion"} className="projectLink">
                  <button className="navbar__linkButton">
                    <div className="navbar__linkItem">
                      More info
                    </div>            
                  </button>
                </Link>
              </div>            
            </div>                   
          </div>
        </div>

        <div className="projectTile">
          <div className="projectLogo">
            <img src = {rotadroid_logo} />
            <div className="projectDescription">
              <div className="projectDescription__text">
                A new spin on an old genre
              </div>
              <div>
                <Link to ={"rotadroid"} className="projectLink">
                  <button className="navbar__linkButton">
                    <div className="navbar__linkItem">
                      More info
                    </div>            
                  </button>
                </Link>
              </div>            
            </div>                   
          </div>
</div>
</div> 
    </div>       
  )
}

export default Projects