import React from "react";
import Gallery from "../../Gallery/Gallery";

import "./radiogram.css"


const Radiogram = () => {
  const appName = "radiogram"
  const imageTotal = 6

  return(
    <div className="project__pageContainer">
      <div className="section__title">
        Radiogram
      </div>
      <div className="about__text">
        Try radiogram to enhance your listening pleasure.
      </div>

      <div className="project__pageDisplay">
        <div className="project__description">
          <ul className="project__featureList">
            <li>Working from home?</li>
            <li>Bit quiet in the "office"?</li>
            <li>Tired of listening to kids screaming?</li>
            <li>Fed up of next doors noisy power tools?</li>
            <li>All this modern music sounds the same?</li>
          </ul>
          <div className="about__text">
            Radiogram is the first app I coded after graduating from my Command Shift software engineering course.
            It's a web based internet radio streaming app and allows the user to search and listen to radio stations based on genre or a free text search feature.
            Users can log in to the app to save their favourite stations.
          </div>
          <div className="about__text">
            App features:
          </div>
          <ul className="project__featureList">
            <li>Internet radio streaming</li>
            <li>Station search feature</li>
            <li>Google log in</li>
            <li>Save and retrieve favourite stations once logged in</li>
          </ul>
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
          <div className="project__techUsedEntry">
            <div>
            <img src="/assets/images/tech_logos/firebase_logo.png" className="project__techLogo" alt="Firebase"/>
            </div>
          </div>
        </div>

      </div>
    </div>      
  )
}

export default Radiogram