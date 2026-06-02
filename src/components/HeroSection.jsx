import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './HeroSection.css';

// Hero background images
import slide1  from '../assets/images/slide-1.jpeg';
import slide2  from '../assets/images/slide-2.jpeg';
import slide3  from '../assets/images/slide-3.jpeg';
import slide4  from '../assets/images/slide-4.jpeg';
import slide5  from '../assets/images/slide-5.jpeg';
import slide6  from '../assets/images/slide-6.jpeg';
import slide7  from '../assets/images/slide-7.jpeg';
import slide8  from '../assets/images/slide-8.jpeg';
import slide9  from '../assets/images/slide-9.jpeg';
import slide10 from '../assets/images/slide-10.jpeg';
import slide11 from '../assets/images/slide-11.jpeg';
import slide12 from '../assets/images/slide-12.jpeg';
import slide13 from '../assets/images/slide-13.jpeg';
import slide14 from '../assets/images/slide-14.jpeg';
import slide15 from '../assets/images/slide-15.jpeg';
import slide16 from '../assets/images/slide-16.jpeg';
import slide17 from '../assets/images/slide-17.jpeg';
import slide18 from '../assets/images/slide-18.jpeg';
import slide19 from '../assets/images/slide-19.jpeg';
import slide20 from '../assets/images/slide-20.jpeg';
import slide21 from '../assets/images/slide-21.jpeg';
import slide22 from '../assets/images/slide-22.jpeg';
import slide23 from '../assets/images/slide-23.jpeg';
import slide24 from '../assets/images/slide-24.jpeg';
import slide25 from '../assets/images/slide-25.jpeg';
import slide26 from '../assets/images/slide-26.jpeg';
import slide27 from '../assets/images/slide-27.jpeg';
import slide28 from '../assets/images/slide-28.jpeg';
import slide29 from '../assets/images/slide-29.jpeg';
import slide30 from '../assets/images/slide-30.jpeg';
import slide31 from '../assets/images/slide-31.jpeg';
import slide32 from '../assets/images/slide-32.jpeg';
import slide33 from '../assets/images/slide-33.jpeg';
import slide34 from '../assets/images/slide-34.jpeg';
import slide35 from '../assets/images/slide-35.jpeg';

const backgrounds = [
  slide1, slide2, slide3, slide4, slide5, slide6, slide7,
  slide8, slide9, slide10, slide11, slide12, slide13, slide14,
  slide15, slide16, slide17, slide18, slide19, slide20, slide21,
  slide22, slide23, slide24, slide25, slide26, slide27, slide28,
  slide29, slide30, slide31, slide32, slide33, slide34, slide35
];

const typeWriterMessages = [
  "Plan Your Entire Event In One Place",
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
    }, 4000);
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
      <div className="hero-overlay" />

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
