import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Link } from 'react-router-dom';

import ProjectCard from "./ProjectCard";

import "./projects.css"

const Projects = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <section className="page-container">
      <div className="projects-container">
        <div className="box-title">
          PROJECTS
        </div>
        <div className="box-text">
          Here are some of the projects I've worked on...
        </div>

        <div className="project-cards-container-desktop">
          <ProjectCard projectId="MenuMate" />

          <div className="footer-divide"></div>

          <ProjectCard projectId="radiogram" />

          <div className="footer-divide"></div>

          <ProjectCard projectId="NewsDesk" />

          <div className="footer-divide"></div>

          <ProjectCard projectId="NASA Image Search" />

          <div className="footer-divide"></div>

          <ProjectCard projectId="Deflektion" />

          <div className="footer-divide"></div>

          <ProjectCard projectId="RotaDroid" />
        </div>
      </div>
    </section>


  )
}

export default Projects