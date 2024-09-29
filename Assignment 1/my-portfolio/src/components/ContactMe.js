import React, { useState } from 'react';
import './ContactMe.css'; 

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!'); 
    
  };

  // Function to clear the form fields
  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>If you have any questions, please fill in the form below, and I will respond to you as soon as possible:</p>
      <p>
        <span role="img" aria-label="email">✉️</span> Email: orlandovelasco@gmail.com<br />
        <span role="img" aria-label="phone">📞</span> Phone: (437) 662-3828 <br />
        <span role="img" aria-label="hours">🕒</span> Monday to Friday: 8 AM - 5 PM
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <div className="button-container">
          <button type="submit">Send Message</button>
          <button type="button" onClick={handleClear}>Clear form</button> 
        </div>
      </form>
    </div>
  );
};

export default ContactMe;


