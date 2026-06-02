import React from 'react';
import { Globe, Share2, MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h3 className="footer-logo text-gradient">Isomer</h3>
            <p className="footer-description">
              The complete solution for planning any event. Connect with the best professionals and make your dream event a reality.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon hover-glow"><Globe size={20} /></a>
              <a href="#" className="social-icon hover-glow"><Share2 size={20} /></a>
              <a href="#" className="social-icon hover-glow"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon hover-glow"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Catering</a></li>
              <li><a href="#">Photography</a></li>
              <li><a href="#">Event Management</a></li>
              <li><a href="#">Decorators</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Trust & Safety</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Isomer Event Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
