import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

import TechEntry from "../../TechEntry/TechEntry"
import Gallery from "../../Gallery/Gallery";


const NewsDesk = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  const appName = "newsdesk"
  const imageTotal = 6

  return(
    <section className="project-page-container">
      <h2 className="project-title">
        NewsDesk
      </h2>
      <h4 className="project-section-title">
        The World News on one page
      </h4>

      <div className="project-description">        
        <p className="project-text">
        NewsDesk is an app that presents a summary of news articles from a variety of sources based on search criteria.
        After logging in to the app, the user can save articles to their profile for later access and can share articles to social media platforms.
        </p>

        <h4 className="project-text">
          App features:
        </h4>
        
        <ul className="project-features">
          <li>Retrieves news article summaries from multiple sources ands presents them on one page</li>
          <li>Search for articles by topic or free text search</li>
          <li>Filter and sort articles by date and source</li>
          <li>Log in facility to allow saving of articles for later viewing</li>
          <li>Dark mode function</li>
        </ul>

        <p className="project-text">
          NewsDesk was my final group project of my Command Shift software engineering course. I worked on the front end and back end parts of the project.
          For the front end we used React and for the back end we used supabase to manage the user and saved articles database.
        </p>

        <h4 className="project-section-title">
          Tech used:
        </h4>
        <div className="project-tech-list">
          <TechEntry id="react" />
          <TechEntry id="supabase" />
        </div>

        <h4 className="project-section-title">
          Links:
        </h4>  
        <div className="project-tech-list">
          <a href="https://newsdesk.onrender.com/" target="blank">
            <TechEntry id="newsdesk" />
          </a>
          <a href="https://www.youtube.com/watch?v=Z8IzX-SCc8c" target="blank">
            <TechEntry id="youtube" />
          </a>
          <a href="https://github.com/billsongames/newsdesk" target="blank">
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

export default NewsDesk