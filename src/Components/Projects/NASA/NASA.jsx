import React from "react";

import "./nasa.css"


const NASA = () => {
  return(
    <div className="project__pageContainer">
      <div className="section__title">
        NASA image search
      </div>
      <div className="about__text">
        Built as a project during my software engineering course at Command Shift,
        NASA image search is (quelle surprise) an app to search for NASA images using a NASA image API. 
        Type in a search query, click "Launch" and marvel at the beauty of he universe, all on the same screen.
      </div>
      <div className="about__text">
        App features:
      </div>
      <div className="about__text">
        Tech used: React
      </div>
      <div className="about__text">
        Links to website and github repo
      </div>        
    </div>      
  )
}

export default NASA