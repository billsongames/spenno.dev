import React from "react";
import { Link, Outlet } from 'react-router-dom';

import "./projects.css"

const Projects = () => {
  return(
    <div className="projects__container">
      <div className="section__title">
        Projects
      </div>
      <div className="projects__intro">
        Here are some of the projects I've worked on...
      </div>
      
      <div className="projects__nav">
        <div className="projects__row">
          <div className="projectTile">
            <div className="projectLogo">
              <img src = "/assets/images/app_logos/radiogram_logo.png" />
              <div className="projectTileDescription">
                <div className="projectTileDescription__text">
                  <div className="projectTileDescription__title">
                    radiogram
                  </div>
                  A radio streaming app to enhance your listening pleasure
                </div>
                <div className="projectLink">
                  <Link to ={"radiogram"}>
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
              <img src =  "/assets/images/app_logos/NASA_logo.png" />
              <div className="projectTileDescription">
                <div className="projectTileDescription__text">
                  <div className="projectTileDescription__title">
                    NASA Image Search
                  </div>
                  Marvel at the beauty of the universe with a NASA image search
                </div>
                <div className="projectLink">
                  <Link to ={"nasa"}>
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

        <div className="projects__row">
          <div className="projectTile">
            <div className="projectLogo">
              <img src = "/assets/images/app_logos/deflektion_logo.png" />
              <div className="projectTileDescription">
                <div className="projectTileDescription__text">
                  <div className="projectTileDescription__title">
                    Deflektion
                  </div>
                  A retro infused brain workout that makes you think ahead
                </div>
                <div className="projectLink">
                  <Link to ={"deflektion"}>
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
              <img src = "/assets/images/app_logos/rotadroid_logo.png"/>
              <div className="projectTileDescription">
                <div className="projectTileDescription__text">
                  <div className="projectTileDescription__title">
                    RotaDroid
                  </div>
                  A new spin on an old genre
                </div>
                <div className="projectLink">
                  <Link to ={"rotadroid"}>
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
    </div>         
  )
}

export default Projects