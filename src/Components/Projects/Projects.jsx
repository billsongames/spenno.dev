import React from "react";
import { Link } from 'react-router-dom';

import "./projects.css"

const Projects = () => {

  return(
      <div className="projects-container">
        <div className="section-title">
          PROJECTS
        </div>
        <div className="projects-intro">
          Here are some of the projects I've worked on...
        </div>

        <div className="projects-nav">

          <div className="project-card">
            <div className="project-logo-container">
              <Link to ={"radiogram"} className="project-logo">
                <img src = "/assets/images/radiogram/radiogram_2.png" />
              </Link>
            </div>
            <div className="project-card-description">
              <div className="project-card-description-text">
                <div className="project-card-description-title">
                  radiogram
                </div>
                <div>
                  A radio streaming app to enhance your listening pleasure
                </div>
              </div>
              <div className="project-link">
                <Link to ={"radiogram"}>
                  <button className="project-link-button">
                    <div className="project-link-item">
                      More info
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>



          <div className="project-card">
            <div className="project-logo-container">
              <Link to ={"newsdesk"} className="project-logo">
                <img src = "/assets/images/newsdesk/newsdesk_2.png" />
              </Link>
            </div>
            <div className="project-card-description">
              <div className="project-card-description-text">
                <div className="project-card-description-title">
                  NewsDesk
                </div>
                <div>
                  The World News on one page
                </div>
              </div>
              <div className="project-link">
                <Link to ={"newsdesk"}>
                  <button className="project-link-button">
                    <div className="project-link-item">
                      More info
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-logo-container">
              <Link to ={"NASA"} className="project-logo">
                <img src = "/assets/images/nasa/nasa_1.png" />
              </Link>
            </div>
            <div className="project-card-description">
              <div className="project-card-description-text">
                <div className="project-card-description-title">
                  NASA Image Search
                </div>
                <div>
                  Marvel at the beauty of the universe
                </div>
              </div>
              <div className="project-link">
                <Link to ={"NASA"}>
                  <button className="project-link-button">
                    <div className="project-link-item">
                      More info
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-logo-container">
              <Link to ={"deflektion"} className="project-logo">
                <img src = "/assets/images/deflektion/deflektion_4.png" />
              </Link>
            </div>
            <div className="project-card-description">
              <div className="project-card-description-text">
                <div className="project-card-description-title">
                  Deflektion
                </div>
                <div>
                  A retro infused brain workout that makes you think ahead
                </div>
              </div>
              <div className="project-link">
                <Link to ={"deflektion"} className="project-logo">
                  <button className="project-link-button">
                    <div className="project-link-item">
                      More info
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-logo-container">
              <Link to ={"rotadroid"} className="project-logo">
                <img src = "/assets/images/rotadroid/rotadroid_1.png" />
              </Link>
            </div>
            <div className="project-card-description">
              <div className="project-card-description-text">
                <div className="project-card-description-title">
                  RotaDroid
                </div>
                <div>
                  A new spin on an old genre
                </div>
              </div>
              <div className="project-link">
                <Link to ={"rotadroid"}>
                  <button className="project-link-button">
                    <div className="project-link-item">
                      More info
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>




          </div>
        </div>


  )
}

export default Projects