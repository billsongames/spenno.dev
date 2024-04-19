import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

import TechEntry from "../../TechEntry/TechEntry"
import Gallery from "../../Gallery/Gallery";


const Radiogram = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  const appName = "radiogram"
  const imageTotal = 6

  return(
      <section className="project-page-container">
        <h2 className="project-title">
          radiogram
        </h2>
        <h4 className="project-text">
          A radio streaming app to enhance your listening pleasure
        </h4>

        <div className="project-description">
          <ul className="project-features">
            <li>Working from home?</li>
            <li>Bit quiet in the "office"?</li>
            <li>Tired of listening to kids screaming?</li>
            <li>Fed up of noisy power tools next door?</li>
            <li>All this modern music sounds the same?</li>
          </ul>
          <p className="project-text">
            Radiogram is the first app I coded after graduating from my Command Shift software engineering course.
            It's a web based internet radio streaming app and allows the user to search and listen to radio stations based on genre or a free text search feature.
            Users can log in to the app to save their favourite stations.
          </p>
          <h4 className="project-section-title">
            App features:
          </h4>
          <ul className="project-features">
            <li>Internet radio streaming</li>
            <li>Station search feature</li>
            <li>Google log in</li>
            <li>Save and retrieve favourite stations once logged in</li>
          </ul>

          <h4 className="project-section-title">
            Tech used:
          </h4>
          <div className="project-tech-list">
            <TechEntry id="react" />
            <TechEntry id="firebase" />
          </div>

          <h4 className="project-section-title">
            Links:
          </h4>  
          <div className="project-tech-list">
            <a href="https://radiogram.onrender.com/" target="blank">
              <TechEntry id="radiogram" />
            </a>
            <a href="https://github.com/billsongames/radiogram" target="blank">
              <TechEntry id="github" />
            </a>
          </div>
        <div>
          <Gallery appName={appName} imageTotal={imageTotal} />
        </div>
        </div>



      </section>

  )
}

export default Radiogram