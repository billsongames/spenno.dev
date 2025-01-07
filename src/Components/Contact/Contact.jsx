import React, { useState, useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import "./contact.css"

const Contact = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

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
    <section className="page-container">
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
    </section>

  )
}

export default Contact