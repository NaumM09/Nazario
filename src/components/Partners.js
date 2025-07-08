import React from 'react';
import "../styles/Partners.css";

const Partners = () => {
  const partners = [
    { 
      name: "NetApp", 
      logo: "https://ibb.co/sJHFtWt2" 
    },
    { 
      name: "Cloudera", 
      logo: "https://ibb.co/Qvt1n0PB" 
    },
    { 
      name: "Huawei", 
      logo: "https://ibb.co/jvsgKcwg" 
    },
    { 
      name: "Octopus Technologies", 
      logo: "https://ibb.co/qYdxKcfh" 
    },
    { 
      name: "PTPI Group", 
      logo: "https://via.placeholder.com/200x100/dc2626/ffffff?text=PTPI+Group" 
    },
    { 
      name: "Fujitsu", 
      logo: "https://companieslogo.com/img/orig/6702.T-f96c4b8e.png" 
    },
    { 
      name: "Lenovo", 
      logo: "https://companieslogo.com/img/orig/LNVGY-8e0ba0f7.png" 
    },
    { 
      name: "Blue Turtle", 
      logo: "https://via.placeholder.com/200x100/0ea5e9/ffffff?text=Blue+Turtle" 
    },
    { 
      name: "ETS", 
      logo: "https://via.placeholder.com/200x100/16a34a/ffffff?text=ETS" 
    },
    { 
      name: "RDC Technology", 
      logo: "https://via.placeholder.com/200x100/7c3aed/ffffff?text=RDC+Tech" 
    }
  ];

  return (
    <section id="partners" className="section section-dark">
      <div className="container">
        {/* Partner Logos Grid - No Text */}
        <div className="minimal-partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="minimal-partner-card">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                className="minimal-partner-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="minimal-partner-fallback">
                <span>{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;