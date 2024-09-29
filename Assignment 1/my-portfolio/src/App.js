/* 
   File Name: App.js
   Description: The App component serves as the main entry point of the React application. 
                It sets up the application layout with a navigation bar, footer, and defines the 
                routing structure for different pages using React Router.
   Student's Name: Orlando Velasco Rios
   Student ID: 301368612
   Date: September 29, 2024
*/

// Importing Required Libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import ProjectsPage from './components/ProjectsPage';
import ServicesPage from './components/ServicesPage';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

// App Component
function App() {
  return (
    // Router component to manage navigation
    <Router>
      
      {/* Main container for the application */}
      <div className="App">
        
        {/* Navigation Bar */}
        <NavBar />
        
        {/* Define application routes */}
        <Routes>
          
          {/* Route for the HomePage component */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route for the AboutMe component */}
          <Route path="/about" element={<AboutMe />} />

          {/* Route for the ProjectsPage component */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Route for the ServicesPage component */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Route for the ContactMe component */}
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        
          {/* Footer of the application */}
        <Footer />
      </div>
    </Router>
  );
}

// Exporting App Component
export default App;
