import React from "react";
import Gallery from "../../Gallery/Gallery";

import "./nasa.css"


const NASA = () => {
  const appName = "nasa"
  const imageTotal = 6

  return(
    <div className="project-page-container">
      <div className="project-title">
        NASA Image Search
      </div>

      <div className="project-page">
        <div className="project-description">
          <div className="project-text">
            Built as a project during my software engineering course at Command Shift,
            NASA Image Search is (quelle surprise) an app to search for NASA images using a NASA image API. 
            Type in a search query, click "Launch" and marvel at the beauty of the universe, all on the same screen.
          </div>
          <div className="project-text">
            App features:
          </div>
          <div className="project-text">
            Links to website and github repo
          </div>
          <div>
            <Gallery appName={appName} imageTotal={imageTotal} />
          </div>
        </div>

        <div className="project-tech-container">
          <div className="project-text">
            Tech used:
          </div>
          <div className="project-tech-entry">
            <div>
            <img src="/assets/images/tech_logos/react_logo.png" className="project-tech-logo" alt="React"/>
            </div>
          </div>
        </div>

      </div>
    </div>  
  )
}

export default NASA