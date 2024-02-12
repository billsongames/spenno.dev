import React from "react";

import AboutGallery from "./AboutGallery";

import "./about.css"

const About = () => {
  return(
    <div className="about_-ontainer">
      <div className="text-section">
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
      </div>
      <div className="about-gallery">
        <AboutGallery />

      </div>

    </div>
  )
}

export default About