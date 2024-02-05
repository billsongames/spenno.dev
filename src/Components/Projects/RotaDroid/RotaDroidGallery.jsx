import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "../projectGallery.css"

import image_1 from "../../../assets/images/rotadroid/rotadroid_1.png"
import image_2 from "../../../assets/images/rotadroid/rotadroid_2.png"
import image_3 from "../../../assets/images/rotadroid/rotadroid_3.png"
import image_4 from "../../../assets/images/rotadroid/rotadroid_4.png"
import image_5 from "../../../assets/images/rotadroid/rotadroid_5.png"
import image_6 from "../../../assets/images/rotadroid/rotadroid_6.png"


const RotaDroidGallery = () => {

  return(
    <div className="projectGallery">
      <Carousel>
        <div className='projectGalleryImage'>
          <img src={image_1}/>
        </div>
        <div className='projectGalleryImage'>
          <img src={image_2}/>
        </div>
        <div className='projectGalleryImage'>
          <img src={image_3}/>
        </div>
        <div className='projectGalleryImage'>
          <img src={image_4}/>
        </div>
        <div className='projectGalleryImage'>
          <img src={image_5}/>
        </div>
        <div className='projectGalleryImage'>
          <img src={image_6}/>
        </div>
      </Carousel>
    </div>
  )

}

export default RotaDroidGallery