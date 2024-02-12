import React from "react";
import Gallery from "../../Gallery/Gallery";


const InProgress = () => {
  const appName = "in_progress"
  const imageTotal = 6

  return(
    <div className="project-page-container">
      <div className="project-title">
        In progress
      </div>
      <div className="project-text">
        Other projects I'm working on at the moment...
      </div>

      <div className="project-page">
        <div className="project-description">
          <div className="project-text-heading">
            Spherodrome
          </div>

          <div className="project-text">
            A shoot 'em up with 3D visuals complemented by 2D arcade action.
            Featuring aliens, asteroids and lots of weapons.
          </div>

          <div className="project-text">
            ZX Loaders
          </div>

          <div className="project-text">
            A recreation of the ZX Spectrum tape loading process, but with no tape loading errors.
          </div>

          <div className="project-text">
            EndoChronology
          </div>

          <div className="project-text">
            EndoChronology is set on a deserted space vessel.
            Basic plot involves colonisation of another world and transport of lifeforms to replicate the homeworld.
            But why is the craft deserted? A droid is sent in to investigate and uncover the truth about what happened.
            Or something like that...
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

export default InProgress