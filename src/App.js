import React, { useState, useEffect } from 'react';
import './styles.css';

// Import all components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'contact'

  // Handle contact button click
  const handleContactClick = () => {
    setCurrentPage('contact');
    setActiveSection('contact');
    // Scroll to top when navigating to contact page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle navigation back to home (when logo is clicked)
  const handleHomeNavigation = () => {
    setCurrentPage('home');
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll to update active section (only for home page)
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'partners'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <div className="App">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onContactClick={handleContactClick}
        onHomeClick={handleHomeNavigation}
        currentPage={currentPage}
      />
      
      {currentPage === 'home' ? (
        <main>
          <Hero />
          <Partners />
          <About />
          <Services />
        </main>
      ) : (
        <Contact />
      )}
      
      <Footer />
    </div>
  );
};

export default App;