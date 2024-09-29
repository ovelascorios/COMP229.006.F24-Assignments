/*
  File Name: ProjectCard.js
  Description: The ProjectCard.js file is a React functional component that renders a 
               card for individual projects in a portfolio website. It displays a project 
               image, title, description, and a button that links to the project's external 
               page. This component is designed to be reusable, allowing for dynamic 
               rendering of various projects by passing different props for the image source, 
               title, description, and link.
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: September 29, 2024
*/

// Importing Required Libraries
import React from 'react';

// ProjectCard Component
const ProjectCard = ({ imageSrc, title, description,link }) => {
  return (
    // Container for the project card
    <div className="project">
      
      {/* Image of the project */}
      <img src={imageSrc} alt={title} />
      
      {/* Title of the project displayed as a heading */}
      <h2>{title}</h2>
      
      {/* Description of the project */}
      <p>{description}</p>
      
      {/* Link to view the project, opening in a new tab */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        {/* Button to trigger the link action */}
        <button>View Project</button>
      </a>
    </div>
  );
};

// Exporting ProjectCard Component
export default ProjectCard;
