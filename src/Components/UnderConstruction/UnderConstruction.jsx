import React from "react";

import "./underConstruction.css"


const UnderConstruction = () => {


  return(
    <div className="title__container">
      <div className="title">
        <div>
          Hi,
        </div>
        <div>
          I'm Paul and I'm a software developer
        </div>
        <div className="title__underConstruction">
          <img 
            src="/assets/images/underConstruction.jpg"
            alt="Under Construction"
            width="250px"
          />
        </div>
        <div className="title__underConstruction__text">  
          Website under construction
        </div>
      </div>  
    </div>
  )
}

export default UnderConstruction