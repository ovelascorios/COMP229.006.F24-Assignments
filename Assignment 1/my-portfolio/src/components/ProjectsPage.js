/*
  File Name: ProjectsPage.js
  Description: The ProjectsPage.js file is a React functional component that serves as a 
               dedicated page for showcasing multiple projects within a portfolio website. 
               It imports and utilizes the ProjectCard component to display individual 
               project details, including images, titles, descriptions, and links to the 
               live project sites.
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: September 29, 2024
*/

// Importing Required Libraries
import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsPage.css'; 
import project1Image from '../images/project1.jpg';
import project2Image from '../images/project2.jpg';
import project3Image from '../images/project3.jpg';


// ProjectsPage Component
const ProjectsPage = () => {
  return (
    <div className="projects">
      
      {/* Header Section */}
      <h1>My Projects</h1>
      
      {/* Project Card for Real State Agent Website */}
      <ProjectCard 
        imageSrc={project1Image} 
        title="Real State Agent Website - Academic Project" 
        description="This individual academic project involved the development of a comprehensive website for a real estate agent. The site features detailed listings of properties for rent and sale, complete with descriptions and images. It includes an interactive map for location context, a contact information section, and a new customer form to facilitate inquiries. Additionally, users can find pertinent information about the agent, enhancing the overall user experience and engagement."
        link="https://66f8ab8ec572d28d337cec08--lucky-beijinho-fe13e2.netlify.app/"
      />
      
       {/* Project Card for Web Interface Design Assignments */}
      <ProjectCard 
        imageSrc={project2Image} 
        title="COMP213 - Web Interface Design Academic Assignments" 
        description="This project involved creating a comprehensive website that showcases various assignments completed throughout the COMP213 course. Key components include a website dedicated to Protected Areas Issues, featuring links to official organizations focused on preserving endangered fauna and flora. Another assignment entailed developing a site for a recognized computer brand, which incorporated tables and interactive maps. Additionally, a form for Continuing Education Course/Instructor Evaluation was created, allowing users to select options and provide answers to a variety of questions. The site also includes a homepage that identifies the student and links to the different assignments, serving as a centralized hub for the course work."
        link="https://nimble-pothos-b02452.netlify.app/" 
      />
      
      {/* Project Card for Pokedex App */}
      <ProjectCard 
        imageSrc={project3Image} 
        title="Pokedex App -Academic Project" 
        description="In this academic project, I developed a Pokedex application using the PokeAPI to display information about the first 151 Pokémon. The app initially loads the first nine Pokémon and employs lazy loading to fetch additional sets of nine as the user scrolls down. It features a modal that provides detailed information about each Pokémon when clicked, with an easy close option. During development, I utilized Chrome Dev Tools for testing and debugging, ensuring accurate API interactions and proper modal functionality."
        link="https://66f8ba9d140deca1819bcebc--enchanting-bienenstitch-6f05a1.netlify.app/" 
      />
      
    </div>
  );
};

// Exporting ProjectsPage Component
export default ProjectsPage;
