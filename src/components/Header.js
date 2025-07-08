import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from ".././assets/naza_logo.svg" ;
import ".././styles/Header.css";

const Header = ({ activeSection, setActiveSection, onContactClick, onHomeClick, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If we're on the contact page and trying to navigate to a section, go to home first
    if (currentPage === 'contact' && sectionId !== 'contact') {
      onHomeClick();
      // Small delay to ensure we're on home page before scrolling
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick(); // Navigate to contact page
    } else {
      // Fallback to scrolling if navigation function isn't provided
      scrollToSection('contact');
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (onHomeClick) {
      onHomeClick(); // Navigate to home page
    } else {
      // Fallback to scrolling to home section
      scrollToSection('home');
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'partners', label: 'Partners' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo" onClick={handleLogoClick}>
            {/* Logo Image */}
            <div className="logo-image">
              <img 
                src={logo}
                alt="Nazairo Technologies Logo"
                className="logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback Logo */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button 
                className="btn btn-primary"
                onClick={handleContactClick}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <ul className="nav-menu mobile show">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  className="btn btn-primary"
                  onClick={handleContactClick}
                >
                  Contact
                </button>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;