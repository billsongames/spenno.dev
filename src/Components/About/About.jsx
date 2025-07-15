import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import AboutEntry from "./AboutEntry";



import "./about.css"

const About = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <section>
      <div className="page-container">
        <div className="about-intro-container">
          <div className="box-text">
            Hi. I'm Paul Spencer, a software developer based in Doncaster, UK. I enjoy building interactive and intuitive user experiences.
          </div>
          <div className="box-text">
            I have completed a six month distance learning software development bootcamp, and since graduating I've worked on personal projects building on the knowledge gained in the course. I have also designed, developed and published games for mobile and PC.
          </div>
          <div className="box-subheading">
            Tech skills:
          </div>
          <div className="about-tech-skills">
            <AboutEntry id="html5" />
            <AboutEntry id="css" />
            <AboutEntry id="js" />
            <AboutEntry id="react-atom" />
            <AboutEntry id="godot-text" />
          </div>
        </div>

        <div className="about-history-container">
          <div className="box-title">
            MY STORY
          </div>
          <div className="box-text">
            My software development story started back in the 1980s with the humble ZX Spectrum.
            Although it was used mostly for playing games, I did delve into the realms of BASIC programming courtesy of the user manual and recall great joy in making user generated graphics, all 8x8 pixels worth, move about on screen.
            With a few loops, sound routines and user interface design thrown in for good measure, the software development bug was born.
          </div>
          <div className="box-text">
            Fast forward 30 years or so, and although I had never written or even attempted to write anything that remotely resembled a proper video game, I decided I quite fancy the idea of having a go. Eventually, after many, many hours of learning, experimentation, design and coding using the <a href="https://godotengine.org/" target="_blank" rel="noreferrer">Godot Game Engine</a>, my first full game "RotaDroid" was written followed by "Deflektion". These were solo projects and considering I was completely self taught, I'm happy with how they turned out.
          </div>
          <div className="box-text">
            In September 2022, I enrolled on a software engineering course at <a href="https://www.commandshift.co/" target="_blank" rel="noreferrer">Command Shift</a> and after building a solid foundation in HTML, CSS, JavaScript, backend and frontend technologies, I graduated in March 2023.
          </div>  
          <div className="box-text">
            Since then, I have broadened my coding expertise and gained experience with different libraries and platforms.
          </div>
        </div>
      </div>

    </section>
  )
}

export default About