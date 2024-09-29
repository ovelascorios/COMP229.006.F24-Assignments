/*
  File Name: HomePage.js
  Description: The HomePage.js file is a React component that renders the main landing page 
               of a personal portfolio website. It includes a welcoming message, a brief 
               description of the individual’s mission, and a button that links to the "About Me" 
               page. The page is designed to give visitors a clear introduction to the portfolio 
               and its purpose.
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: September 29, 2024
*/

// Importing Required Libraries
import React from 'react';
import './HomePage.css'; 
import { Link } from 'react-router-dom';

// HomePage Component
const HomePage = () => {
  return (
    <div className="home">
      
      {/* Header Section */}
      <h1>Welcome to My Portfolio</h1>

      {/* Introductory paragraph describing the developer's mission and expertise */}
      <p>My mission is to create intuitive and visually appealing web applications that 
        prioritize user experience, combining my expertise in Java with best practices in 
        web design to transform ideas into reality.</p>
      
       {/* Link to the About page with a button */}
      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
};

// Exporting HomePage Component
export default HomePage;
