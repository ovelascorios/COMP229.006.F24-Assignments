/*
  File Name: ContactMe.js
  Description: The ContactMe.js file is a React component that renders a contact form for a personal 
               portfolio website. It allows users to input their first name, last name, contact number, 
               email, and a message. The form data is managed using functions to handle form 
               submission and clearing the form fields. The component also displays 
               the user's contact information and working hours.
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: September 29, 2024
*/

// Importing Required Libraries
import React, { useState } from 'react';
import './ContactMe.css'; 

// ContactMe Component
const ContactMe = () => {

  // State to hold the form data 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  // Function to handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update the formData state with the new value for the corresponding field
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Display an alert to indicate the message was sent
    alert('Message sent!'); 
    
  };

  // Function to clear the form fields
  const handleClear = () => {
    // Reset the formData state to empty strings for each field
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
      
      {/* Header Section */}
      <h1>Contact Me</h1>

      {/* Contact message*/}
      <p>If you have any questions, please fill in the form below, and I will respond to you as soon as possible:</p>
      
      {/* Contact Information */}
      <p>
        ✉️ Email: orlandovelasco@gmail.com<br />
        📞 Phone: (437) 662-3828 <br />
        🕒 Monday to Friday: 8 AM - 5 PM
      </p>

       {/* Form for user input. Each field call the handleChange function to update the value of the field */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        
        {/* Buttons for form actions */}
        <div className="button-container">

          {/* Buttons to submit the form data */}
          <button type="submit">Send Message</button>

          {/* Button to clear the form fields calling the handleClear function to reset all form fields to their initial state */}
          <button type="button" onClick={handleClear}>Clear form</button> 
        </div>
      </form>
    </div>
  );
};

// Exporting ContactMe Component
export default ContactMe;


