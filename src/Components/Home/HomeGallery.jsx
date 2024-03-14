import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Link } from 'react-router-dom';

import "./homeGallery.css"


const HomeGallery = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSrc, setCurrentSrc] = useState("")
  const [currentTitle, setCurrentTitle] = useState("")
  const [currentLink, setCurrentLink] = useState("")

  const images = [
    {
      src: "/assets/images/radiogram/radiogram_2.png",
      title: "radiogram",
      link: "projects/radiogram"
    },
    {
      src: "/assets/images/newsdesk/newsdesk_2.png",
      title: "NewsDesk",
      link: "projects/newsdesk"
    },
    {
      src: "/assets/images/nasa/nasa_1.png",
      title: "Nasa Image Search",
      link: "projects/nasa"
    },
    {
      src: "assets/images/deflektion/deflektion_4.png",
      title: "Deflektion",
      link: "projects/deflektion"
    },
    {
      src: "/assets/images/rotadroid/rotadroid_1.png",
      title: "RotaDroid",
      link: "projects/rotadroid"
    }
  ]


  useEffect(() => {
    const timer = setInterval(() => {

      if (currentIndex === images.length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)

      }
    }, 5000)

    return () => clearInterval(timer)

  },[currentIndex, images.length])


  return(
    <div className="home-gallery-container">
      <div className="home-gallery-pic-container">
        <Link to ={images[currentIndex].link}>
          <img className="home-gallery-pic" src={images[currentIndex].src}  />
        </Link>
      </div>

      <div className="home-gallery-nav">

        <div>
          <Link to ={images[currentIndex].link} className="home-gallery-link">
            {images[currentIndex].title}
          </Link>
        </div>



      </div>

    </div>
  )
}

export default HomeGallery