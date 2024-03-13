import React, {createContext, useEffect, useState} from "react";

const DarkModeContext = createContext()

function DarkModeProvider(props) {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"))
  const toggleDarkMode = () => {
    setDarkMode(
      darkMode === "true"
      ? "false"
      : "true"
    )
  }

  useEffect(() => {
    localStorage.setItem("darkMode", `${darkMode}`)
  },[darkMode])

  

  return (
    <div>
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
}

export {DarkModeContext, DarkModeProvider}