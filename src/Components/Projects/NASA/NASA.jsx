import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

import TechEntry from "../../TechEntry/TechEntry"
import Gallery from "../../Gallery/Gallery";


const NASA = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
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
            <strong>App features:</strong>
          </div>

          <ul className="project-features">
            <li>Photos of Near-Earth Objects </li>
            <li>Photos of Deep Space Objects</li>
            <li>Photos of spacecraft</li>
            <li>Photos of planets</li>
            <li>Searching for and viewing all of the above and more</li>
          </ul>



          <div className="project-tech-container">
            <div className="project-text">
              <strong>Tech used:</strong>
            </div>
            <div className="project-tech-list">
              <TechEntry id="react" />
            </div>
          </div>

          <div className="project-text">
            <strong>Links:</strong>
          </div>  
            <div className="project-tech-list">
              <a href="https://nasa-gallery-search.netlify.app/" target="blank">
                <TechEntry id="nasa" />
              </a>
              <a href="https://github.com/billsongames/tech-test" target="blank">
                <TechEntry id="github" />
              </a>
            </div>

          <div>
            <Gallery appName={appName} imageTotal={imageTotal} />
          </div>
   
        </div>



      </div>
    </div>
  )
}

export default NASA