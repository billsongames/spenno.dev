import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

import TechEntry from "../../TechEntry/TechEntry";
import Gallery from "../../Gallery/Gallery";

import "../projectPage.css"

const Deflektion = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const appName = "deflektion"
  const imageTotal = 6

  return (
    <section className="page-container">
      <div className="project-page-container">
        <div className="box-title">
          Deflektion
        </div>
        <h4 className="project-text">
          A retro infused brain workout that makes you think ahead
        </h4>

        <div className="project-description">
          <p className="project-text">
            Deflektion is a simple collect 'em up style game with a continuously moving ball that needs to be guided through each level to collect the icons in the right order.
            Influence the path of the ball by using deflektors to change its direction.
            Various blocks will alter the path of the ball too. Some are advantageous and some are not.
            Careful planning is needed to progress through each level.
          </p>

          <h4 className="project-section-title">
            Game features:
          </h4>

          <ul className="project-features">
            <li>Bounce, deflekt and collect your way through 26 fiendishly designed levels</li>
            <li>Retro arcade style presentation with glorious pixel art backgrounds and game components</li>
            <li>Challenging gameplay that really does make you think ahead to advance through each level</li>
            <li>Chiptune style music and sound effects</li>
          </ul>

          <p className="project-text">
            This was my second full game release and builds on my experience developing RotaDroid.
            With challenging level design, a rigorous test process ensured that every level can be completed (as verified by me because I designed and completed them all 👍)
          </p>

          <p className="project-text">
            Deflektion is available for PC.
          </p>

          <h4 className="project-section-title">
            Tech used:
          </h4>
          <div className="project-tech-list">
            <TechEntry id="godot" />
          </div>
        </div>

        <h4 className="project-section-title">
          Links:
        </h4>
        <div className="project-tech-list">
          <a href="https://billsongames.itch.io/deflektion" target="blank">
            <TechEntry id="itch" />
          </a>
        </div>

        <div>
          <Gallery appName={appName} imageTotal={imageTotal} />
        </div>
      </div>
    </section>
  )
}

export default Deflektion