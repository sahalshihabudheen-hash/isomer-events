import React from 'react';
import { Users, CalendarHeart, Globe2, ShieldCheck } from 'lucide-react';
import './StatsSection.css';

const stats = [
  { icon: Users, value: '15,000+', label: 'Verified Providers' },
  { icon: CalendarHeart, value: '50,000+', label: 'Events Managed' },
  { icon: Globe2, value: '120+', label: 'Cities Covered' },
  { icon: ShieldCheck, value: '100%', label: 'Secure Bookings' }
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper">
                  <Icon size={32} className="text-gradient" />
                </div>
                <h3 className="stat-value text-gradient">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
