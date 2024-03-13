import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import { techEntries } from "../../data/techEntries";

import "./about.css"

const AboutEntry = ({id}) => {
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
    <div className="about-entry">
      {darkMode === true
        ? <img src={techEntries[index].logoLight} className="about-tech-logo" alt={techEntries[index].name} />
        : <img src={techEntries[index].logoDark} className="about-tech-logo" alt={techEntries[index].name} />
      }
    </div>
  )
}

export default AboutEntry