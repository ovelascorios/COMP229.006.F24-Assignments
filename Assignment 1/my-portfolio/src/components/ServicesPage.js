// ServicesPage.js
import React from 'react';
import './ServicesPage.css'; 
import service1Image from '../images/service1.jpg'; 
import service2Image from '../images/service2.jpg';
import service3Image from '../images/service3.jpg';
import ServiceCard from './ServiceCard'; 

const ServicesPage = () => {
  return (
    <div className="services">
      <h1>My Services</h1>
      <div className="service-cards">
        <ServiceCard 
          imageSrc={service1Image} 
          title="Web Development" 
          description="Creating responsive and high-quality websites."
        />
        <ServiceCard 
          imageSrc={service2Image} 
          title="General Programming" 
          description="Offering programming solutions for various needs."
        />
        <ServiceCard 
          imageSrc={service3Image} 
          title="Mobile Apps" 
          description="Developing intuitive and user-friendly mobile applications."
        />
      </div>
    </div>
  );
};

export default ServicesPage;

