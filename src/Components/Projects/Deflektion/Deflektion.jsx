import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

import TechEntry from "../../TechEntry/TechEntry";
import Gallery from "../../Gallery/Gallery";


const Deflektion = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  const appName = "deflektion"
  const imageTotal = 6

  return(
    <div className="project-page-container">
      <div className="project-title">
        Deflektion
      </div>
      <div className="project-text">
        A retro infused brain workout that makes you think ahead.
      </div>

      <div className="project-page">
        <div className="project-description">
          <div className="project-text">
            Deflektion is a simple collect 'em up style game with a continuously moving ball that needs to be guided through each level to collect the icons in the right order.
            Influence the path of the ball by using deflektors to change its direction.
            Various blocks will alter the path of the ball too. Some are advantageous and some are not.
            Careful planning is needed to progress through each level.
          </div>
          <div className="project-text">
            Game features:
          </div>
          <ul className="project-features">
            <li>Bounce, deflekt and collect your way through 26 fiendishly designed levels</li>
            <li>Retro arcade style presentation with glorious pixel art backgrounds and game components</li>
            <li>Challenging gameplay that really does make you think ahead to advance through each level</li>
            <li>Chiptune style music and sound effects</li>
          </ul>
          <div className="project-text">
            This was my second full game release and builds on my experience developing RotaDroid.
            With challenging level design, a rigorous test process ensured that every level can be completed (as verified by me because I designed and completed them all 👍)
          </div>
          <div className="project-text">
            Deflektion is available for Android and Windows platforms.
          </div>

          <div className="project-tech-container">
            <div className="project-text">
              <strong>Tech used:</strong>
              
            </div>
            <div className="project-tech-list">
              <TechEntry id="godot" />
            </div>
          </div>

          <div className="project-text">
            <strong>Links:</strong>            
          </div>  
          <div className="project-tech-list">
            <a href="https://billsongames.itch.io/deflektion" target="blank">
              <TechEntry id="itch" />
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

export default Deflektion