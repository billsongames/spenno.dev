import React from "react";
import Gallery from "../../Gallery/Gallery";

import godot_logo from "../../../assets/images/tech_logos/godot_logo.png"

import "./rotadroid.css"


const RotaDroid = () => {
  const appName = "rotadroid"
  const imageTotal = 6

  return(
    <div className="project__pageContainer">
      <div className="section__title">
        RotaDroid
      </div>
      <div className="about__text">
        A new spin on an old genre.
      </div>

      <div className="project__pageDisplay">
        <div className="project__description">
          <div className="about__text">
            Destroying bricks using geometric shapes has never been so much fun! Progress through the levels, get the pick ups but watch out for the aliens!
          </div>
          <div className="about__text">
            Game features:
          </div>
          <ul className="project__featureList">
            <li>32 levels of brick breaking action</li>
            <li>Choice of three control methods: buttons, swipe or tilt</li>
            <li>Two game modes</li>
            <li>Retro style gameplay</li>
            <li>Chiptune soundtrack</li>
          </ul>
          <div className="about__text">
            Coded from scratch using Godot game engine, this was my first full game release and my first venture into the world of coding.
          </div>
          <div className="about__text">
            RotaDroid is available for Android and Windows platforms. 
          </div>  
          <div className="about__text">
            Links to itch.io page
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
              <img src={godot_logo} className="project__techLogo" alt="Godot Game Engine"/>
            </div>
            
          </div>
        </div>


        
      </div>
  </div>  
  )
}

export default RotaDroid