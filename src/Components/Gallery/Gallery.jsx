import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import PropTypes from "prop-types"

import "./gallery.css"


const Gallery = ({appName, imageTotal}) => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  const [imageID, setImageID] = useState(1)
  const path = `/assets/images/${appName}/${appName}_`

  const onImageClick = (event) => {
    setImageID(event.target.id)
  }

  const jsx = []
  for (let i=1; i<imageTotal+1; i++) {
    jsx.push(
        <img
          key={i}
          id = {i}
          className="gallery-thumb"
          src={`${path}${i}.png`}
          onClick={onImageClick}
          alt = {`Screenshot ${i}`}
        />
    )
  }



  return(
    <section className="gallery-container">
      <h2 className="gallery-title">
        GALLERY
      </h2>
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