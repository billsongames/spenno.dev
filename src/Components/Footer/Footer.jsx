import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import "./footer.css"

const Footer = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return(
    <footer className="footer-container">
      <div className="footer-divide">
      </div>
      <div className="footer-text">
        © 2024 Paul Spencer
      </div>
      
    </footer>
  )
}

export default Footer