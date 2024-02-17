import React from "react";

import HomeGallery from "./HomeGallery";

import "./home.css"


const Home = () => {
  const arrow = "->"


  return(
    <div className="home-container">
      <div className="home-title">
        DESIGN {arrow} BUILD {arrow} ENJOY
      </div>

      <HomeGallery />

    </div>
  )
}

export default Home