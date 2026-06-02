import React, { useState } from 'react';
import { Search, MapPin, Calendar, Mic, SlidersHorizontal } from 'lucide-react';
import './SmartSearchBar.css';

const SmartSearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const popularSearches = ['Wedding Photographers', 'Corporate Catering', 'Stage Decorators', 'Luxury Car Rentals'];

  return (
    <div className={`smart-search-wrapper ${isFocused ? 'focused' : ''}`}>
      <div className="smart-search-bar glass-panel">
        
        <div className="search-group location-group">
          <MapPin size={20} className="icon text-secondary" />
          <div className="input-wrapper">
            <label>Location</label>
            <input type="text" placeholder="Where is the event?" />
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="search-group date-group">
          <Calendar size={20} className="icon text-secondary" />
          <div className="input-wrapper">
            <label>Date</label>
            <input type="text" placeholder="Add dates" />
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="search-group service-group">
          <div className="input-wrapper">
            <label>Service</label>
            <input 
              type="text" 
              placeholder="What do you need?" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />
          </div>
          <button className="voice-search-btn hover-glow" aria-label="Voice Search">
            <Mic size={18} />
          </button>
        </div>
        
        <button className="search-submit-btn hover-lift">
          <Search size={24} />
        </button>
      </div>

      {isFocused && (
        <div className="search-suggestions glass-panel animate-fade-in-up">
          <div className="suggestion-header">
            <h4>Recent Searches</h4>
          </div>
          <ul className="suggestion-list">
            {popularSearches.map((item, index) => (
              <li key={index} className="suggestion-item">
                <Search size={16} className="text-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="suggestion-filters">
            <button className="filter-chip"><SlidersHorizontal size={14} /> Price Range</button>
            <button className="filter-chip">Top Rated</button>
            <button className="filter-chip">Available Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartSearchBar;
