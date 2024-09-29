/*
  File Name: Footer.js
  Description: The Footer.js file is a React component that renders a footer section for a personal 
               portfolio website. It includes a horizontal line and copyright notice with the 
               student's name and course title. 
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: September 29, 2024
*/

// Importing Required Libraries
import React from 'react';
import './Footer.css'; 

// Footer Component
const Footer = () => {
  return (
    <footer className="Footer">
      
      {/* Paragraph containing footer text */}
      <p className="footer-text">
        {/* Horizontal rule to visually separate the footer from other content */}
        <hr></hr>
        {/* Copyright notice with name and course information */}
        <h6>&copy;&nbsp;Copyright Orlando Velasco Rios - COMP229 Web Application Development</h6>
      </p>
    </footer>
  );
};

// Exporting Footer Component
export default Footer;