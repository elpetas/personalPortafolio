import React, { useState } from 'react';
import Navbar from "../components/navbar";
import emailjs from '@emailjs/browser';
import "../css/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
    honeypot: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitizedData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    if (formData.honeypot) {
      console.log('Submission blocked as potential bot.');
      return;
    }
    try {
      await sendToPersonalEmail(sanitizedData);
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        message: '',
        honeypot: '',
      });

      console.log('Submission successful');
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  const sendToPersonalEmail = async (data) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    try {
      await emailjs.send(serviceId, templateId, data, userId);
    }
    catch (e) {
        console.log(e);
    }
    console.log('Sending email:', data);
  };

  return (
    <div className="contact">
      <Navbar />
      <div className="contactContainer">
        <div className="contactTitle">
          <h1>Contact</h1>
          <p>
            To get in touch, simply fill out the form below. Whether you have a specific project in mind or you're just curious about what's possible, don't hesitate to drop me a message. I'm here to bring your digital dreams to life!
          </p>
        </div>
        <div className="contactform">
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'none' }}>
              <label htmlFor="honeypot">Do not fill this out</label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <div className="formInput">
                <label htmlFor="firstName">First Name  (<span className='required'>*</span>)</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="lastName">Last Name  (<span className='required'>*</span>)</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="formInput">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email (<span className='required'>*</span>) </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="messageRow">
              <label htmlFor="message">Message  (<span className='required'>*</span>)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
