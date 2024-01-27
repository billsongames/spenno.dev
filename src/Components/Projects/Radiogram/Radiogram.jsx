import React from "react";
import { Link } from 'react-router-dom';

import Projects from "../Projects";

import "./radiogram.css"


const Radiogram = () => {


  return(
    <div>
      <div className="projects__container">
        Projects
        <div className="projects__nav">
          <div>
            <Link to ={"../radiogram"}>
              radiogram
            </Link>          
          </div>
          <div>
            <Link to ={"../NASA"}>
              NASA
            </Link>   
          </div>
          <div>
            <Link to ={"../deflektion"}>
              Deflektion
            </Link>   
          </div>
          <div>
            <Link to ={"../rotadroid"}>
              RotaDroid
            </Link>  
          </div>
        </div>
      </div>
      <div className="radiogram__container">
        Radiogram
      </div>
    </div>

  )
}

export default Radiogram