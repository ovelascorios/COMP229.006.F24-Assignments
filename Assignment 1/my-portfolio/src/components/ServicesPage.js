/* 
  File Name: ServicesPage.js
  Description: The ServicesPage component is a part of a React portfolio website that 
               showcases the services offered by the developer. This component 
               imports images and a reusable ServiceCard component to present 
               each service attractively. 
  Student's Name: Orlando Velasco Rios
  Student ID: 301368612
  Date: September 29, 2024
*/

// Importing Required Libraries
import React from 'react';
import './ServicesPage.css'; 
import service1Image from '../images/service1.jpg'; 
import service2Image from '../images/service2.jpg';
import service3Image from '../images/service3.jpg';
import ServiceCard from './ServiceCard'; 

// ServicesPage Component
const ServicesPage = () => {
  return (
    <div className="services">
      
      {/* Header Section */}
      <h1>My Services</h1>

      {/* Container for the individual service cards */}
      <div className="service-cards">
        
        {/* ServiceCard component for Web Development service */}
        <ServiceCard 
          imageSrc={service1Image} 
          title="Web Development" 
          description="Creating responsive and high-quality websites."
        />
        
         {/* ServiceCard component for General Programming service */}
        <ServiceCard 
          imageSrc={service2Image} 
          title="General Programming" 
          description="Offering programming solutions for various needs."
        />
        
         {/* ServiceCard component for Mobile Apps service */}
        <ServiceCard 
          imageSrc={service3Image} 
          title="Mobile Apps" 
          description="Developing intuitive and user-friendly mobile applications."
        />
      </div>
    </div>
  );
};

// Exporting ServicesPage Component
export default ServicesPage;

