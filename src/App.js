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

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'partners', 'contact'];
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
  }, []);

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
            <Partners />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;