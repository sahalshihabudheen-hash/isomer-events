import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './HeroSection.css';

// Import the newly extracted images
import hero1 from '../assets/images/hero-1.jpeg';
import hero2 from '../assets/images/hero-2.jpeg';
import hero3 from '../assets/images/hero-3.jpeg';
import hero4 from '../assets/images/hero-4.jpeg';

const backgrounds = [hero1, hero2, hero3, hero4];

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {backgrounds.map((bg, index) => (
        <div 
          key={index}
          className={`hero-bg-image ${index === currentBg ? 'active' : ''}`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
      <div className="hero-overlay"></div>
      
      <div className="container hero-container animate-fade-in-up">
        <div className="hero-content-left">
          <p className="hero-subtitle text-gradient">KERALA'S #1 EXCLUSIVE EVENT COMPANY</p>
          
          <h1 className="hero-title">
            Partner with Melodia<br />
            Event Management in<br />
            Kerala
          </h1>
          
          <div className="hero-actions-row">
            <button className="btn btn-primary btn-lg hover-lift">
              Contact Us
            </button>
            
            <div className="hero-rating-box">
              <div className="rating-avatars">
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar"></div>
              </div>
              <div className="rating-info">
                <div className="stars">
                  <Star size={14} fill="var(--warning)" color="var(--warning)" />
                  <Star size={14} fill="var(--warning)" color="var(--warning)" />
                  <Star size={14} fill="var(--warning)" color="var(--warning)" />
                  <Star size={14} fill="var(--warning)" color="var(--warning)" />
                  <Star size={14} fill="var(--warning)" color="var(--warning)" />
                </div>
                <span>4.8/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
