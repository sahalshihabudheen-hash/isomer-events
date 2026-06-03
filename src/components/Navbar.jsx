import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, User } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Catering', to: '/catering' },
  { label: 'Photography', to: '/photography' },
  { label: 'Décor', to: '/decor' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  // Only be transparent on the homepage; all other pages get solid navbar
  const isHome = location.pathname === '/';
  const isSolid = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isSolid ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setActiveLink('/')}>
          <div className="logo-icon">IE</div>
          <span className="logo-text">Isomer <span className="logo-accent">Events</span></span>
        </Link>

        {/* Center Nav Links */}
        <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${activeLink === link.to ? 'active' : ''}`}
              onClick={() => { setActiveLink(link.to); setIsMobileMenuOpen(false); }}
            >
              {link.label}
              {activeLink === link.to && <span className="active-dot" />}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Link to="/dashboard/user" className="user-avatar-btn" aria-label="Sign In">
            <User size={18} />
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
