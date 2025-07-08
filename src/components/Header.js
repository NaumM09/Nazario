import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from ".././assets/naza_logo.svg" ;
import ".././styles/Header.css";

const Header = ({ activeSection, setActiveSection }) => {
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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
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
          <div className="logo" onClick={() => scrollToSection('home')}>
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
                onClick={() => scrollToSection('contact')}
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
                  onClick={() => scrollToSection('contact')}
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