import React, {createContext, useState} from "react";

const DarkModeContext = createContext()



function DarkModeProvider(props) {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"))
  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", `${!darkMode}`)
    setDarkMode(!darkMode)
  }

  

  return (
    <div>
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
}

export {DarkModeContext, DarkModeProvider}