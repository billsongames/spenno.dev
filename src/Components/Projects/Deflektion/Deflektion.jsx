import React from "react";

import "./deflektion.css"


const Deflektion = () => {
    return(
    <div className="project__pageContainer">
      <div className="section__title">
        Deflektion
      </div>
      <div className="about__text">
        A retro infused brain workout that makes you think ahead.
      </div>
      <div className="about__text">
        A simple collect 'em up style game with a continuously moving ball that needs to be guided through each level to collect the icons in the right order. 
        Influence the path of the ball by using deflektors to change its direction. 
        Various blocks will alter the path of the ball too. Some are advantageous and some are not. 
        Careful planning is needed to progress through each level.
      </div>
      <div className="about__text">
        Game features:
      </div>
      <ul className="project__featureList">
        <li>Bounce, deflekt and collect your way through 26 fiendishly designed levels</li>
        <li>Retro arcade style presentation with glorious pixel art backgrounds and game components</li>
        <li>Challenging gameplay that really does make you think ahead to advance through each level</li>
        <li>Chiptune style music and sound effects</li>
      </ul>
      <div className="about__text">
        This was my second full game release and builds on my experience developing RotaDroid. 
        With challenging level design, a rigorous test process ensured that every level can be completed (as verified by me because I designed and completed them all 👍) 
        Deflektion is available for Android and Windows platforms.        
      </div>
      <div className="about__text">
        Tech used: Godot Game Engine
      </div>
      <div className="about__text">
        Links to itch.io page
      </div>        
    </div>      
  )
}

export default Deflektion