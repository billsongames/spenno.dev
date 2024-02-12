import React from "react";
import Gallery from "../../Gallery/Gallery";


const RotaDroid = () => {
  const appName = "rotadroid"
  const imageTotal = 6

  return(
    <div className="project-page-container">
      <div className="project-title">
        RotaDroid
      </div>
      <div className="project-text">
        A new spin on an old genre.
      </div>

      <div className="project-page">
        <div className="project-description">
          <div className="project-text">
            Destroying bricks using geometric shapes has never been so much fun! Progress through the levels, get the pick ups but watch out for the aliens!
          </div>
          <div className="project-text">
            Game features:
          </div>
          <ul className="project-features">
            <li>32 levels of brick breaking action</li>
            <li>Choice of three control methods: buttons, swipe or tilt</li>
            <li>Two game modes</li>
            <li>Retro style gameplay</li>
            <li>Chiptune soundtrack</li>
          </ul>
          <div className="project-text">
            Coded from scratch using Godot game engine, this was my first full game release and my first venture into the world of coding.
          </div>
          <div className="project-text">
            RotaDroid is available for Android and Windows platforms.
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

export default RotaDroid