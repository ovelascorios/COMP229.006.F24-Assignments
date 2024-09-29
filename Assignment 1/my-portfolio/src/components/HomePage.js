import React from 'react';
import './HomePage.css'; 
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>My mission is to create intuitive and visually appealing web applications that 
        prioritize user experience, combining my expertise in Java with best practices in 
        web design to transform ideas into reality.</p>
      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
};

export default HomePage;
