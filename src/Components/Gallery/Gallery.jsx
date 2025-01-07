import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import PropTypes from "prop-types"

import "./gallery.css"


const Gallery = ({appName, imageTotal}) => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  const [imageID, setImageID] = useState(1)
  const path = `/assets/images/projects/${appName}/${appName}_`

  const onImageClick = (event) => {
    setImageID(event.target.id)
  }

  const jsx = []
  for (let i=1; i<imageTotal+1; i++) {
    jsx.push(
      <div className="gallery-thumb">
        <img
          key={i}
          id = {i}
          
          src={`${path}${i}.png`}
          onClick={onImageClick}
          alt = {`Screenshot ${i}`}
        />
      </div>  
    )
  }



  return(
    <section className="gallery-container">
      <div className="box-title">
        GALLERY
      </div>
      <div className="gallery-mainImage">
        <img
          className="gallery-mainImage-pic"
          src={`${path}${imageID}.png`}
          alt = {`${appName} screenshot ${imageID}`}
        />
      </div>

      <div className="gallery-thumb-container">
        {jsx}
      </div>
    </section>
  )
}

export default Gallery