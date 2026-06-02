import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="blob blob-1 animate-float"></div>
        <div className="blob blob-2 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="blob blob-3 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container hero-container animate-fade-in-up">
        <div className="hero-badge glass-panel">
          <Sparkles size={16} className="text-gradient" />
          <span>The #1 Event Platform</span>
        </div>
        
        <h1 className="hero-title">
          Plan Your Entire Event<br />
          <span className="text-gradient">In One Place</span>
        </h1>
        
        <p className="hero-description">
          From catering to stage teams, photography to travel packages.
          Laovvable connects you with top-rated professionals to make your dream event a reality.
        </p>
        
        <div className="hero-actions">
          <button className="btn btn-primary btn-lg hover-lift">
            Start Planning <ArrowRight size={20} />
          </button>
          <button className="btn btn-secondary btn-lg hover-lift">
            Explore Providers
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
