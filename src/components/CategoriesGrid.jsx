import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Utensils, 
  CalendarCheck, 
  Camera, 
  Video, 
  Music, 
  Car, 
  Plane, 
  Shirt, 
  Sparkles, 
  Palette,
  Tent
} from 'lucide-react';
import './CategoriesGrid.css';

const categories = [
  { name: 'Catering', icon: Utensils, count: '1,240+', path: '/catering' },
  { name: 'Event Management', icon: CalendarCheck, count: '850+', path: '/services/event-management' },
  { name: 'Stage Teams', icon: Tent, count: '420+', path: '/services/stage-teams' },
  { name: 'Photography', icon: Camera, count: '2,100+', path: '/photography' },
  { name: 'Videography', icon: Video, count: '1,500+', path: '/services/videography' },
  { name: 'Light & Sound', icon: Music, count: '630+', path: '/services/light-sound' },
  { name: 'Car Rentals', icon: Car, count: '340+', path: '/services/car-rentals' },
  { name: 'Travel Packages', icon: Plane, count: '280+', path: '/packages' },
  { name: 'Dress Rentals', icon: Shirt, count: '920+', path: '/services/dress-rentals' },
  { name: 'Makeup Artists', icon: Sparkles, count: '1,800+', path: '/services/makeup' },
  { name: 'Decorators', icon: Palette, count: '1,150+', path: '/decor' },
];

const CategoriesGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Popular <span className="text-gradient">Categories</span></h2>
          <p className="section-subtitle">
            Find exactly what you need from our extensive list of verified event service providers.
          </p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="category-card hover-lift glass-panel"
                onClick={() => navigate(category.path)}
                style={{ cursor: 'pointer' }}
              >
                <div className="category-icon-wrapper">
                  <Icon size={28} className="category-icon text-gradient" />
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count} providers</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
