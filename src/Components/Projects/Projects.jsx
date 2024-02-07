import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";

import "./projects.css"

const Projects = () => {
  return(
      <div className="projects-container">
        <div className="section-title">
          Projects
        </div>
        <div className="projects-intro">
          Here are some of the projects I've worked on...
        </div>

        <div className="projects-nav">

          <div>
                      <div className="project-card">
            <div className="project-logo">
              <img src = "/assets/images/app_logos/radiogram_logo.png" />

              <div className="project-card-description">
                <div className="project-card-description-text">
                  <div className="project-card-description-title">
                    radiogram
                  </div>
                  A radio streaming app to enhance your listening pleasure
                  </div>
                  <div className="project-link">
                    <Link to ={"radiogram"}>
                      <button className="navbar-link-button">
                        <div className="navbar-link-item">
                          More info
                        </div>            
                      </button>
                    </Link>
                  </div>            
                </div>          
              </div>
            </div>

            <div className="project-card">
              <div className="project-logo">
                <img src =  "/assets/images/app_logos/NASA_logo.png" />

                <div className="project-card-description">
                  <div className="project-card-description-text">
                    <div className="project-card-description-title">
                      NASA Image Search
                    </div>
                    Marvel at the beauty of the universe with a NASA image search
                  </div>
                  <div className="project-link">
                    <Link to ={"nasa"}>
                      <button className="navbar-link-button">
                        <div className="navbar-link-item">
                          More info
                        </div>            
                      </button>
                    </Link>
                  </div>            
                </div>                   
              </div>
            </div>
          </div>


          <div>
                        <div className="project-card">
              <div className="project-logo">
                <img src = "/assets/images/app_logos/deflektion_logo.png" />

                <div className="project-card-description">
                  <div className="project-card-description-text">
                    <div className="project-card-description-title">
                      Deflektion
                    </div>
                    A retro infused brain workout that makes you think ahead
                  </div>
                  <div className="project-link">
                    <Link to ={"deflektion"}>
                      <button className="navbar-link-button">
                        <div className="navbar-link-item">
                          More info
                        </div>            
                      </button>
                    </Link>
                  </div>            
                </div>                   
              </div>
            </div>

            <div className="project-card">
              <div className="project-logo">
                <img src = "/assets/images/app_logos/rotadroid_logo.png"/>

                <div className="project-card-description">
                  <div className="project-card-description-text">
                    <div className="project-card-description-title">
                      RotaDroid
                    </div>
                    A new spin on an old genre
                  </div>
                  <div className="project-link">
                    <Link to ={"rotadroid"}>
                      <button className="navbar-link-button">
                        <div className="navbar-link-item">
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