import React from 'react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import "../styles/Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        "Managed IT Services",
        "Cloud & Storage",
        "Network Monitoring",
        "Backup & Recovery",
        "IT Support"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "News & Updates",
        "Contact"
      ]
    },
    {
      title: "Contact Us", 
      links: [
        { type: "phone", text: "+27 82 693 3362", icon: Phone },
        { type: "email", text: "info@nazairo.co.za", icon: Mail },
        { type: "address", text: "Unit 36, Carrowmore Park Norfolk Road, Halfway Gardens, Midrand Gauteng, South Africa, 1685", icon: MapPin }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-accent">Nazairo</span> Technologies
            </div>
            <p className="footer-description">
              Empowering African businesses with secure, scalable IT solutions for the digital age.
            </p>
            <div className="footer-social">
              <div className="social-icon">
                <Globe size={20} />
              </div>
              <div className="social-icon">
                <Mail size={20} />
              </div>
              <div className="social-icon">
                <Phone size={20} />
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4 className="footer-title">{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {section.title === "Contact Us" ? (
                      <div className="contact-item">
                        <link.icon size={16} className="contact-icon" />
                        {link.type === "phone" ? (
                          <a href={`tel:${link.text}`} className="contact-link">{link.text}</a>
                        ) : link.type === "email" ? (
                          <a href={`mailto:${link.text}`} className="contact-link">{link.text}</a>
                        ) : (
                          <span className="contact-text">{link.text}</span>
                        )}
                      </div>
                    ) : (
                      <a href="#" className="footer-link">{link}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} Nazairo Technologies. All rights reserved.
            </p>
            <p className="designer-credit">
              Site designed by <a href="https://www.globalexpedyte.co.za/" target="_blank" rel="noopener noreferrer" className="designer-link">Global Expedyte</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;