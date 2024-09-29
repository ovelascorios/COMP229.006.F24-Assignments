import React from 'react';
import './AboutMe.css'; 
import me from '../images/me.jpg'; 
import resume from '../documents/resume.pdf'; 
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={me} alt="Me" className='me-img'/>
      <p>With two years of experience in customer support solving software-related issues 
        and one year leading software implementation, quality control, 
        and documentation projects, I am now focused on web development. 
        Currently pursuing a Diploma in Software Engineering Technician, I have developed 
        skills in QA, C#, JavaScript, Python, Oracle, MS-SQL Server, Unix/Linux, HTML, and 
        Microsoft tools. My strong problem-solving abilities, excellent communication, and 
        passion for creating efficient, user-friendly web applications drive my work. 
        I am a quick learner, adaptable, and achievement-oriented. Feel free to explore my 
        portfolio to see the projects I've developed and how I put these skills into practice.</p>
      <div className="resume">
        <button><a href= {resume} download>Download My Resume</a></button>
      </div>
      <div className="portafolio">
      <Link to="/projects">
        <button>Learn More About My Projects</button>
      </Link>
      </div>
      <div> 
        <h4> Orlando Velasco Rios</h4>
        <h5>Software Engineering Technician</h5>
      </div>
    </div>
  );
};

export default AboutMe;
