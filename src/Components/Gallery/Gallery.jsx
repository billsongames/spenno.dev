import {React, useState} from "react";
import PropTypes from "prop-types"

import "./gallery.css"


const Gallery = ({appName, imageTotal}) => {

  const [imageID, setImageID] = useState(1)
  const path = `/assets/images/${appName}/${appName}_`

  const onImageClick = (event) => {
    setImageID(event.target.id)
  }

  const jsx = []
  for (let i=1; i<imageTotal+1; i++) {
    jsx.push(
        <img 
          id = {i}
          className="gallery__thumb"
          src={`${path}${i}.png`}
          onClick={onImageClick}
          alt = {`Screenshot ${i}`}
        />
    )
  }



  return(
    <div>
      <div className="gallery__container">
        <div className="gallery__mainImage">
          <img 
            className="gallery__mainImagePic"
            src={`${path}${imageID}.png`}
            alt = {`Screenshot ${imageID}`}
          />  
        </div>


        <div className="gallery__thumbContainer">
          {jsx}
        </div>
      </div>  
    </div>

  )
}

export default Gallery