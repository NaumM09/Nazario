import React from 'react';
import { ArrowRight, Server, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import "../styles/Hero.css";
import heroImage from "../assets/heroImage.png";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section id="home" className="hero-clean">
      <div className="container">
        <div className="hero-grid">
          {/* Left Side - Content */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ShieldCheck size={16} />
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-yellow">Secure</span> & Scalable<br/>
              IT Solutions for<br/>
              <span className="text-yellow">Africa's Growth</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Enterprise-grade cloud, storage, and managed IT services designed for growing African businesses. 
              Experience reliable technology with local expertise.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button 
                className="btn btn-primary btn-large"
                onClick={() => scrollToSection('services')}
              >
                Our Services <ArrowRight size={18} />
              </button>
              <button 
                className="btn btn-secondary btn-large"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </motion.div>

            {/* Simple Stats */}
            <motion.div 
              className="hero-stats-simple"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - Image */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-image-container">
              <img 
                src={heroImage}
                alt="Nazairo Technologies - Modern IT Infrastructure"
                className="hero-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hero-image-fallback">
                <Server size={80} />
                <p>Add your hero image here</p>
                <span>/assets/hero-image.jpg</span>
              </div>
              
              {/* Subtle accent elements */}
              <div className="image-accent-1"></div>
              <div className="image-accent-2"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="scroll-line"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;