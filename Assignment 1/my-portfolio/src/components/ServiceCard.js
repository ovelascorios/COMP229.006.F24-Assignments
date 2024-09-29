// ServiceCard.js
import React, { useState } from 'react';

const ServiceCard = ({ imageSrc, title, description }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleCardClick = () => {
    setIsOpen(true); 
  };

  const handleCloseModal = () => {
    setIsOpen(false); 
  };

  return (
    <div>
      <div className="service" onClick={handleCardClick}>
        <img src={imageSrc} alt={title} />
        <h2>{title}</h2>
      </div>
      
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
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

export default ServiceCard;
