import React from 'react';
import { Star, Check, ArrowRight } from 'lucide-react';
import './FeaturedPackages.css';

const packages = [
  {
    title: 'Wedding Premium',
    price: '$5,000',
    rating: 4.9,
    reviews: 124,
    services: ['Venue & Catering', 'Photography & Video', 'Stage & Decor', 'Live Music'],
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Corporate Elite',
    price: '$2,500',
    rating: 4.8,
    reviews: 89,
    services: ['Conference Hall', 'AV Equipment', 'Buffet Lunch', 'Hostesses'],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Birthday Bash',
    price: '$800',
    rating: 4.7,
    reviews: 210,
    services: ['Themed Decor', 'Cake & Desserts', 'Entertainer', 'Photographer'],
    image: 'https://images.unsplash.com/photo-1530103862676-de8892ebe829?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Festival Extravaganza',
    price: '$10,000',
    rating: 5.0,
    reviews: 45,
    services: ['Large Stage Setup', 'Pro Sound System', 'Security Team', 'Food Stalls'],
    image: 'https://images.unsplash.com/photo-1533174000255-124b61183146?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const FeaturedPackages = () => {
  return (
    <section className="packages-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="text-gradient">Packages</span></h2>
          <p className="section-subtitle">
            Curated bundles of top services to make your event planning effortless and cost-effective.
          </p>
        </div>
        
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card glass-panel hover-lift">
              <div className="package-image">
                <img src={pkg.image} alt={pkg.title} />
                <div className="package-rating">
                  <Star size={16} fill="var(--warning)" color="var(--warning)" />
                  <span>{pkg.rating} ({pkg.reviews})</span>
                </div>
              </div>
              
              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-price">
                  Starting at <span className="price-amount">{pkg.price}</span>
                </div>
                
                <ul className="package-services">
                  {pkg.services.map((service, idx) => (
                    <li key={idx}>
                      <Check size={16} className="text-success" />
                      {service}
                    </li>
                  ))}
                </ul>
                
                <button className="btn btn-primary w-full mt-4">
                  Book Now <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
