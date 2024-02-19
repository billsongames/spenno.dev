import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import Gallery from "../../Gallery/Gallery";


const Radiogram = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  const appName = "radiogram"
  const imageTotal = 6

  return(
      <div className="project-page-container">
        <div className="project-title">
          Radiogram
        </div>
        <div className="project-text">
        A radio streaming app to enhance your listening pleasure
        </div>

        <div className="project-page">
          <div className="project-description">
            <ul className="project-features">
              <li>Working from home?</li>
              <li>Bit quiet in the "office"?</li>
              <li>Tired of listening to kids screaming?</li>
              <li>Fed up of next doors noisy power tools?</li>
              <li>All this modern music sounds the same?</li>
            </ul>
            <div className="project-text">
              Radiogram is the first app I coded after graduating from my Command Shift software engineering course.
              It's a web based internet radio streaming app and allows the user to search and listen to radio stations based on genre or a free text search feature.
              Users can log in to the app to save their favourite stations.
            </div>
            <div className="project-text">
              App features:
            </div>
            <ul className="project-features">
              <li>Internet radio streaming</li>
              <li>Station search feature</li>
              <li>Google log in</li>
              <li>Save and retrieve favourite stations once logged in</li>
            </ul>
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
            <div className="project-tech-entry">
              <div>
              <img src="/assets/images/tech_logos/firebase_logo.png" className="project-tech-logo" alt="Firebase"/>
              </div>
            </div>
          </div>

        </div>
      </div>

  )
}

export default Radiogram