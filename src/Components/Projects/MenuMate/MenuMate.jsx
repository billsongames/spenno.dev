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
          Plan your weeks menu by searching for recipes and adding them to a schedule.
          This creates a list of ingredients, some of which you will most likely already have loitering in the food cupboard.
          Tick them off to get a slimmed down shopping list and then pop to your favourite supermarche. Easy!
        </p>

        <h4 className="project-text">
          App features:
        </h4>

        <ul className="project-features">
          <li>Integration with the Edamam API to access 1000's of recipes</li>
          <li>Search for recipes by region, ingredient and recipe type</li>
          <li>Create custom shopping lists to prevent unnecessary purchases</li>
        </ul>

        <p className="project-text">

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
          <a href="https://github.com/billsongames/menu-mate" target="blank">
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