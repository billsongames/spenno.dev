import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import HomeGallery from "./HomeGallery";

import "./home.css"


const Home = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const arrow = "->"

  const [inputs, setInputs] = useState({
    "name": "",
    "email": "",
    "message": ""
  })

  const initialValues = {
    "name": "",
    "email": "",
    "message": ""
  }

  const handleContactFormChange = (event) => {
    const name = event.target.name
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleContactFormReset = () => {
    setInputs(initialValues)
  }


  return (
    <section>
      <div className="page-container">
        <div className="home-gallery-container">
          <div className="home-title">
            DESIGN {arrow} BUILD {arrow} ENJOY
          </div>
          <HomeGallery />
        </div>
        <div className="home-about-container">
          <div>
            <img src="/assets/images/profile/ps.jpeg" className="about-intro-profilePic" />
          </div>
          <div className="home-about-text">
            <div>
              Hi, I'm Paul Spencer
            </div>
            <div>
              I enjoy building interactive and intuitive user experiences
            </div>

          </div>
        </div>
        
        <div className="contact-container">
          <div className="box-title">
            KEEP IN TOUCH
          </div>
          <form
            action="https://formspree.io/f/mvoeavoz"
            method="POST"
            className="contact-form"
            id="contact-form"
          >

            <input
              type="text"
              name="name"
              value={inputs.name}
              placeholder="Your name"
              onChange={handleContactFormChange}
              className="contact-form-section"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={inputs.email}
              onChange={handleContactFormChange}
              className="contact-form-section"
              required
            />

            <textarea
              type="text"
              name="message"
              value={inputs.message}
              placeholder="Your message"
              onChange={handleContactFormChange}
              className="contact-form-message"
              required
            />

            <div className="contact-form-buttons-container">
              <button type="submit" className="contact-form-button">
                <div className="contact-form-button-item">
                  Send
                </div>
              </button>
              <button type="reset" className="contact-form-button" onClick={handleContactFormReset}>
                <div className="contact-form-button-item">
                  Reset
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Home