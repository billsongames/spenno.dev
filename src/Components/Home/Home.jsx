import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import HomeGallery from "./HomeGallery";
import Contact from "../Contact/Contact"

import "./home.css"


const Home = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  const arrow = "->"


  return(
    <div>
      <div className="home-container">
        <div className="home-title">
          DESIGN {arrow} BUILD {arrow} ENJOY
        </div>
        <HomeGallery />
      </div>
      <div className="home-about-container">
        <div>
          <img src="/assets/images/profile/ps.jpeg" className="about-intro-profilePic"/>
        </div>
        <div className="home-about-text">
          <div>
            Hi. I'm Paul Spencer
          </div>
          <div>
            I enjoy building interactive and intuitive user experiences
          </div>

        </div>
      </div>
      <Contact />
    </div>
  )
}

export default Home