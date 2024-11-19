import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

import TechEntry from "../../TechEntry/TechEntry"
import Gallery from "../../Gallery/Gallery";


const MenuMate = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const appName = "menumate"
  const imageTotal = 6

  return (
    <section className="project-page-container">
      <h2 className="project-title">
        MenuMate
      </h2>
      <h4 className="project-section-title">
        Add the recipes, Create the menu, Hassle free shopping
      </h4>

      <div className="project-description">
        <p className="project-text">
          MenuMate blurb
        </p>

        <h4 className="project-text">
          App features:
        </h4>

        <ul className="project-features">
          <li>feature 1</li>
          <li>feature 2</li>
          <li>feature 3</li>
          <li>feature 4</li>
        </ul>

        <p className="project-text">
          MenuMate description
        </p>

        <h4 className="project-section-title">
          Tech used:
        </h4>
        <div className="project-tech-list">
          <TechEntry id="react" />
        </div>

        <h4 className="project-section-title">
          Links:
        </h4>
        <div className="project-tech-list">
          <a href="https://menumate.onrender.com/" target="blank">
            <TechEntry id="menumate" />
          </a>
          <a href="https://github.com/billsongames/menumate" target="blank">
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

export default MenuMate