import React from 'react';

const ProjectCard = ({ imageSrc, title, description,link }) => {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>View Project</button>
      </a>
    </div>
  );
};

export default ProjectCard;
