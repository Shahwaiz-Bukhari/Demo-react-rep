import React, { useState } from "react";
import './Contact.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors(prev => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is not valid.";
    }

    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Contact us</h1>
          <p>
            We love hearing from you! Whether you’re ready to discuss your next project, have a question, or just want to say hello, we’re all ears. 
            Our team is here to make your experience exceptional. Drop us a message, and let’s start a conversation.
          </p>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <section className="backing">
        <div className="contact-container" aria-label="Contact section">
          <div className="visit-us">
            <h2>Visit Us</h2>
            <ul>
              <li><span className="material-icons">location_on</span>294, B1 Johar Town, Lahore, Pakistan</li>
              <li><span className="material-icons">schedule</span>Monday - Friday, 9:00 AM - 6:00 PM</li>
              <li><span className="material-icons">email</span>info@bricksol.net</li>
              <li><span className="material-icons">call</span>0423788666</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <h3>Question? Send us a message. Don't be shy</h3>
            <div className="input-row">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Name"
                />
                {formErrors.name && <small className="error">{formErrors.name}</small>}
              </div>

              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Email"
                />
                {formErrors.email && <small className="error">{formErrors.email}</small>}
              </div>
            </div>

            <div className="input-wrapper">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                aria-label="Message"
                rows={5}
              ></textarea>
              {formErrors.message && <small className="error">{formErrors.message}</small>}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
