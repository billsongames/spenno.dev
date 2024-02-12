import React from "react";
import Gallery from "../../Gallery/Gallery";


const Template = () => {
  const appName = "template"
  const imageTotal = 6

  return(
    <div className="project-page-container">
      <div className="project-title">
        title
      </div>
      <div className="project-text">
        tagline
      </div>

      <div className="project-page">
        <div className="project-description">
          <div className="project-text">
            main description
          </div>

          <div className="project-text">
            features
          </div>
          <ul className="project-features">
            <li>list 1</li>
            <li>list 2</li>
            <li>list 3</li>
            <li>list 4</li>
          </ul>
          <div className="project-text">
            description 2
          </div>
          <div className="project-text">
            Deflektion is available for Android and Windows platforms.
          </div>

          <div className="project-text">
            Links to itch.io page
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
            <img src="/assets/images/tech_logos/godot_logo.png" className="project-tech-logo" alt="Godot Game Engine"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template