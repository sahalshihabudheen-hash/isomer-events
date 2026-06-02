import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './HeroSection.css';

// Hero background images
import hero4 from '../assets/images/hero-4.jpeg';
import hero7 from '../assets/images/hero-7.jpeg';

const backgrounds = [hero4, hero7];

const typeWriterMessages = [
  "Partner with Isomer Events Planer in Kerala",
  "Plan your dream wedding with top professionals",
  "Organize corporate events seamlessly",
  "The ultimate platform for any celebration"
];

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  // Typewriter state
  const [text, setText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentMsg = typeWriterMessages[msgIndex];
      
      if (isDeleting) {
        setText(currentMsg.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setMsgIndex((prev) => (prev + 1) % typeWriterMessages.length);
        }
      } else {
        setText(currentMsg.substring(0, text.length + 1));
        if (text.length === currentMsg.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, msgIndex]);

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
          <p className="hero-subtitle text-gradient">KERALA'S EXCLUSIVE EVENT COMPANY</p>
          
          <h1 className="hero-title typewriter-text">
            {text}<span className="cursor">|</span>
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
