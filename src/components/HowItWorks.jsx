import React from 'react';
import { Search, ListChecks, CalendarCheck, Smile } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: Search,
    title: 'Search',
    description: 'Find exactly what you need using our smart filters and categories.'
  },
  {
    icon: ListChecks,
    title: 'Compare',
    description: 'Review ratings, prices, and portfolios to pick the best provider.'
  },
  {
    icon: CalendarCheck,
    title: 'Book',
    description: 'Securely book your chosen services with our verified payment system.'
  },
  {
    icon: Smile,
    title: 'Enjoy',
    description: 'Relax and enjoy your perfectly planned event with peace of mind.'
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It <span className="text-gradient">Works</span></h2>
          <p className="section-subtitle">
            Plan your entire event in four simple steps
          </p>
        </div>
        
        <div className="timeline-container">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="timeline-step">
                <div className="timeline-icon-wrapper glass-panel hover-glow">
                  <Icon size={32} className="text-gradient" />
                  <div className="step-number">{index + 1}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < steps.length - 1 && <div className="timeline-connector"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
