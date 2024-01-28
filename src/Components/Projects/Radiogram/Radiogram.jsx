import React from "react";
import { Link } from 'react-router-dom';

import Projects from "../Projects";

import "./radiogram.css"


const Radiogram = () => {
  return(
    <div className="project__pageContainer">
      <div className="section__title">
        Radiogram
      </div>
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
        Tech used: React, Firebase
      </div>
      <div className="about__text">
        Links to website and github repo
      </div>        
    </div>      
  )
}

export default Radiogram