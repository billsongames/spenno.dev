import React from "react";

import HomeGallery from "./HomeGallery";

import "./home.css"


const Home = () => {
  const arrow = "->"


  return(
    <div className="home-container">
      <div className="home-title">
        Design {arrow} Build {arrow} Enjoy
      </div>

      <HomeGallery />

    </div>
  )
}

export default Home