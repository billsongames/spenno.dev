import React from "react";

import HomeGallery from "./HomeGallery";
import Contact from "../Contact/Contact"

import "./home.css"


const Home = () => {
  const arrow = "->"


  return(
    <div>
      <div className="home-container">
        <div className="home-title">
          DESIGN {arrow} BUILD {arrow} ENJOY
        </div>
        <HomeGallery />
      </div>
      <Contact />
    </div>
  )
}

export default Home