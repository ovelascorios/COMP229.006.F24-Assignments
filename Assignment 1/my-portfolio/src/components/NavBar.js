/*
  File Name: NavBar.js
  Description: The NavBar.js file is a React component that renders the navigation bar for 
               a personal portfolio website. It includes a logo image and a set of links 
               for navigating to different sections of the website (Home, About Me, Projects, 
               Services, and Contact). 
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: September 29, 2024
*/

// Importing Required Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import logo from '../images/logo.jpg'; 

// NavBar Component
const NavBar = () => {
  return (
    <nav className="navbar">
      
      {/* Logo section */}
      <div className="logo">
        {/* Logo image with alternative text for accessibility */}
        <img src={logo} alt="Logo" className="logo-img" /> 
      </div>
      
      {/* Unordered list for navigation links */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

// Exporting NavBar Component
export default NavBar;




