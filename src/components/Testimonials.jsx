import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Bride',
    text: 'Planning my wedding was completely stress-free thanks to Isomer. I found the best photographer and decorator within my budget in just a few clicks.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80'
  },
  {
    name: 'David Chen',
    role: 'Corporate Event Manager',
    text: 'We use this platform for all our corporate retreats. The package deals are incredible, and the verified providers always deliver top-notch service.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Birthday Party Host',
    text: 'The UI is so beautiful and easy to use. I loved the transparent pricing. Highly recommend to anyone organizing an event!',
    rating: 4.8,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our <span className="text-gradient">Users Say</span></h2>
          <p className="section-subtitle">
            Don't just take our word for it. Read reviews from people who planned their perfect events with us.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card glass-panel hover-lift">
              <Quote size={40} className="quote-icon" />
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(testimonial.rating) ? 'var(--warning)' : 'none'} 
                    color="var(--warning)" 
                  />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
