import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import TechEntry from "../TechEntry/TechEntry";



import "./about.css"

const About = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return(
    <div className="about-container">
      <div className="about-intro-container">
        <div>
          <img src="/assets/images/profile/ps.jpeg" className="about-intro-profilePic"/>
        </div>
        <div>
          <div className="about-text">
            Hi. I'm Paul Spencer, a software developer based in Doncaster, UK. I enjoy building interactive and intuitive user experiences.
          </div>
          <div className="about-text">
            I also have proficiency developing video games with two full releases on Android and PC platforms.
          </div>
          <div className="about-text">
            I have a strong enthusiasm for anything to do with the 1980s, particularly retro game related stuff and rock music.
            This is probably why I enjoy playing video games and electric guitar, although not necessarily at the same time, unless it's a quick blast on Guitar Hero.
          </div>
          <div className="about-text">
            <strong>Tech skills:</strong>
          </div>
          <div className="about-tech-skills">
            <TechEntry id="html5" />
            <TechEntry id="css" />
            <TechEntry id="js" />
            <TechEntry id="react-atom" />
            <TechEntry id="godot-text" />
          </div>
        </div>
  
      </div>


      <div className="about-history-container">
        <div className="about-title">
            MY STORY
          </div>
          <div className="about-text">
            My software development story started back in the 1980s with the humble ZX Spectrum.
            Although it was used mostly for playing games, I did delve into the realms of BASIC programming courtesy of the user manual and recall great joy in making user generated graphics, all 8x8 pixels worth, move about on screen.
            Throw in a few loops, sound routines and some user interface design and the software development bug was born.
          </div>
          <div className="about-text">
            Fast forward 30 years or so, and although I had never written or even attempted to write anything that remotely resembled a proper video game, I decided I quite fancy the idea of writing one. Eventually, after many, many hours of learning, experimentation, design and coding using the <a href="https://godotengine.org/" target="_blank" rel="noreferrer">Godot Game Engine</a>, my first full game "RotaDroid" was written followed by "Deflektion". These were solo projects and considering I was completely self taught, I'm happy with how they turned out.
          </div>
          <div className="about-text">
            In September 2022, I enrolled on a software engineering course at <a href="https://www.commandshift.co/" target= "_blank" rel="noreferrer">Command Shift</a> and after building a solid foundation in HTML, CSS, JavaScript, backend and frontend technologies particularly React, I graduated in March 2023.
          </div>
      </div>


    </div>
  )
}

export default About