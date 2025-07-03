import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

import TechEntry from "../../TechEntry/TechEntry";
import Gallery from "../../Gallery/Gallery";

import "../projectPage.css"

const RotaDroid = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const appName = "rotadroid"
  const imageTotal = 6

  return (
    <section className="page-container">
      <div className="project-page-container">
        <div className="box-title">
          RotaDroid
        </div>
        <h4 className="project-text">
          A new spin on an old genre
        </h4>

        <div className="project-description">
          <div className="project-text">
            Destroying bricks using geometric shapes has never been so much fun! Progress through the levels, get the pick ups but watch out for the aliens!
          </div>
          <h4 className="project-section-title">
            Game features:
          </h4>
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
            RotaDroid is available for PC.
          </div>


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
          <a href="https://billsongames.itch.io/rotadroid" target="blank">
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

export default RotaDroid