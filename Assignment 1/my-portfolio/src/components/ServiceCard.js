/*
  File Name: ServiceCard.js
  Description: The ServiceCard component displays individual services on a services page 
               and provides a modal for detailed information. 
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: September 29, 2024
 */

// Importing Required Libraries
  import React, { useState } from 'react';


// ServiceCard Component 
const ServiceCard = ({ imageSrc, title, description }) => {
  
  // State to manage whether the modal is open or closed
  const [isOpen, setIsOpen] = useState(false); 
  
  // Function to handle click events on the service card
  const handleCardClick = () => {
     // Set isOpen state to true to open the modal
    setIsOpen(true); 
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    // Set isOpen state to false to close the modal
    setIsOpen(false); 
  };

  return (
    // Main container for the component
    <div>
      
       {/* Service Card that displays an image and title of the service */}
      <div className="service" onClick={handleCardClick}>
        <img src={imageSrc} alt={title} /> 
        <h2>{title}</h2>
      </div>
      
      {/* Conditional rendering of the modal based on isOpen state */}
      {isOpen && (
        
        // Modal overlay that appears when the card is clicked
        <div className="modal" onClick={handleCloseModal}>
          
          {/* Modal content that is not affected by the modal's click event */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={imageSrc} alt={title} /> 
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Exporting ServiceCard Component
export default ServiceCard;
