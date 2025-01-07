import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Link } from 'react-router-dom';

import ProjectCardDesktop from "./ProjectCardDesktop";

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
          <ProjectCardDesktop projectId="MenuMate" />

          <div className="footer-divide"></div>

          <ProjectCardDesktop projectId="radiogram" />

          <div className="footer-divide"></div>

          <ProjectCardDesktop projectId="NewsDesk" />

          <div className="footer-divide"></div>

          <ProjectCardDesktop projectId="NASA Image Search" />

          <div className="footer-divide"></div>

          <ProjectCardDesktop projectId="Deflektion" />

          <div className="footer-divide"></div>

          <ProjectCardDesktop projectId="RotaDroid" />
        </div>
      </div>
    </section>


  )
}

export default Projects