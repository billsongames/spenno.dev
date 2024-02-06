import React from "react";
import Gallery from "../../Gallery/Gallery";

import "./nasa.css"


const NASA = () => {
  const appName = "nasa"
  const imageTotal = 6

  return(
    <div className="project__pageContainer">
      <div className="section__title">
        NASA Image Search
      </div>

      <div className="project__pageDisplay">
        <div className="project__description">
          <div className="about__text">
            Built as a project during my software engineering course at Command Shift,
            NASA Image Search is (quelle surprise) an app to search for NASA images using a NASA image API. 
            Type in a search query, click "Launch" and marvel at the beauty of the universe, all on the same screen.
          </div>
          <div className="about__text">
            App features:
          </div>
          <div className="about__text">
            Links to website and github repo
          </div>
          <div>
            <Gallery appName={appName} imageTotal={imageTotal} />
          </div>
        </div>

        <div className="project__techUsedContainer">
          <div className="about__text">
            Tech used:
          </div>
          <div className="project__techUsedEntry">
            <div>
            <img src="/assets/images/tech_logos/react_logo.png" className="project__techLogo" alt="React"/>
            </div>
          </div>
        </div>

      </div>
    </div>  
  )
}

export default NASA