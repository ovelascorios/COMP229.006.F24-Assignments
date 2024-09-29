/*
  File Name: AboutMe.js
  Description: The AboutMe.js file is a React component that renders an "About Me" section for 
               a personal portfolio website. It displays a profile image, a description of the 
               individual's professional background, a downloadable resume link, and a button 
               linking to the projects page.     
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: September 29, 2024
*/

// Importing Required Libraries
import React from 'react';
import './AboutMe.css'; 
import me from '../images/me.jpg'; 
import resume from '../documents/resume.pdf'; 
import { Link } from 'react-router-dom';

// AboutMe Component
const AboutMe = () => {
  return (
    <div className="about">

      {/* Header Section */}
      <h1>About Me</h1>

      {/* Image Section */}
      <img src={me} alt="Me" className='me-img'/>

      {/* Description Section */}
      <p>With two years of experience in customer support solving software-related issues 
        and one year leading software implementation, quality control, 
        and documentation projects, I am now focused on web development. 
        Currently pursuing a Diploma in Software Engineering Technician, I have developed 
        skills in QA, C#, JavaScript, Python, Oracle, MS-SQL Server, Unix/Linux, HTML, and 
        Microsoft tools. My strong problem-solving abilities, excellent communication, and 
        passion for creating efficient, user-friendly web applications drive my work. 
        I am a quick learner, adaptable, and achievement-oriented. Feel free to explore my 
        portfolio to see the projects I've developed and how I put these skills into practice.</p>
      
      {/* Resume Button Section */}
      <div className="resume">
        <button><a href= {resume} download>Download My Resume</a></button>
      </div>

      {/* Portafolio Button Section */}
      <div className="portafolio">
      <Link to="/projects">
        <button>Learn More About My Projects</button>
      </Link>
      </div>
      
      {/* Personal information Section */}
      <div> 
        <h4> Orlando Velasco Rios</h4>
        <h5>Software Engineering Technician</h5>
      </div>
    </div>
  );
};

// Exporting AboutMe Component
export default AboutMe;