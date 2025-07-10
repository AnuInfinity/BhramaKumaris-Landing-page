import React from 'react';
import './LandingPage.css';
import Services from './Services';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';


const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="el-navbar">
        <div className="el-navbar-left">
            <span className="el-logo-img">
            <img src="/shiv.png" alt="Shiv" /> 
            </span>
          <span className="el-logo">Bhrama Kumaries Ishwarya Vishwa Vidyalaya</span>
        </div>
        <ul className="el-navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact Us</a></li>
          
        </ul>
        
      </nav>

      {/* Hero Section */}
      <section className="el-hero" id="home">
        
          {/* Chakra figure placeholder */}
          <div className="image-text-container">
            <img src="/shivbg.jpg" alt="Shiv" className="el-chakra-figure" style={{ width: '100%',height: '90%' }} />
            <div className="overlay-text">
              <h1 className='el-chakra-text'>Brahma Kumaris</h1>
              <p className='text'>Brahma Kumaris is a worldwide spiritual movement led by women, dedicated to personal transformation and world renewal through Rajyoga Meditation.</p>
              <p className='text'>Founded in India in 1937, Brahma Kumaris has spread to over 110 countries on all continents and has had an extensive impact in many sectors as an international NGO.</p>
            </div>
          </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* About Us Section */}
      <AboutUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
};

export default LandingPage; 