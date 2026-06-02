import React from 'react';
import HeroSection from '../components/HeroSection';
import SmartSearchBar from '../components/SmartSearchBar';
import CategoriesGrid from '../components/CategoriesGrid';
import FeaturedPackages from '../components/FeaturedPackages';
import HowItWorks from '../components/HowItWorks';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      
      <div className="search-container">
        <SmartSearchBar />
      </div>
      
      <CategoriesGrid />
      <FeaturedPackages />
      <HowItWorks />
      <StatsSection />
      <Testimonials />
    </div>
  );
};

export default Home;
