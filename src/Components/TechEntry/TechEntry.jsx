import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import { techEntries } from "../../data/techEntries";

import "./techEntry.css"

const TechEntry = ({id}) => {
  const [index, setIndex] = useState(0)
  const [name, setName] = useState("")

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  useEffect(() => {
    const matchIndex = async () => {
      setIndex(techEntries.findIndex(techEntry => 
        techEntry.id === id))
    }

    matchIndex()
    
  },[])

  


  return(
    <div className="tech-entry">
      {darkMode
        ? <img src={techEntries[index].logoLight} className="project-tech-logo" />
        : <img src={techEntries[index].logoDark} className="project-tech-logo" />
      }
    </div>
  )
}

export default TechEntry