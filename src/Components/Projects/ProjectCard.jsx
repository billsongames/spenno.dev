import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

import "./projectCard.css"

import { projectListings } from "../../data/projectListings";

const ProjectCard = ({ projectId }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const matchIndex = async () => {
      setIndex(projectListings.findIndex(projectListing =>
        projectListing.projectId === projectId
      ))
    }

    matchIndex()
  }, [])

  return (
    <React.Fragment>
      <article className="project-card-desktop">
        <div className="project-card-desktop-image-container">
          <Link to={projectListings[index].projectLocalUrl}>
            <img src={projectListings[index].projectImagePath} className="project-card-desktop-image"></img>
          </Link>
        </div>
        <div className="project-card-desktop-description">
          <div className="project-card-desktop-description-title">
            {projectListings[index].projectId}
          </div>
          <div className="project-card-desktop-description-text">
            {projectListings[index].projectBlurb}
          </div>
          <div className="project-card-desktop-description-link">
            <Link to={projectListings[index].projectLocalUrl}>
              <button className="project-card-desktop-link-button">
                <div className="project-card-desktop-link-item">
                  More info
                </div>
              </button>
            </Link>
          </div>
        </div>
      </article >

      <article className="project-card-mobile">
        <div className="project-card-mobile-description">
          <div className="project-card-mobile-description-title">
            {projectListings[index].projectId}
          </div>
          <div className="project-card-mobile-description-text">
            {projectListings[index].projectBlurb}
          </div>
        </div>  

          <div className="project-card-mobile-image-container">
          <Link to={projectListings[index].projectLocalUrl}>
            <img src={projectListings[index].projectImagePath} className="project-card-mobile-image"></img>
          </Link>
        </div>
{/*           <div className="project-card-mobile-description-link">
            <Link to={projectListings[index].projectLocalUrl}>
              <button className="project-card-mobile-link-button">
                <div className="project-card-mobile-link-item">
                  More info
                </div>
              </button>
            </Link>
          </div> */}

      </article>
    </React.Fragment>
  )

}

export default ProjectCard