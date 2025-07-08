import React from 'react';
import "../styles/Partners.css";

const Partners = () => {
  const partners = [
    { 
      name: "NetApp", 
      logo: "https://i.ibb.co/sJHFtWt/netapp.png" 
    },
    { 
      name: "Cloudera", 
      logo: "https://i.ibb.co/Qvt1n0P/cloudera.png" 
    },
    { 
      name: "Huawei", 
      logo: "https://i.ibb.co/jvsgKcw/huawei.png" 
    },
    { 
      name: "Octopus Technologies", 
      logo: "https://i.ibb.co/qYdxKcf/octopus.png" 
    },
    { 
      name: "PTPI Group", 
      logo: "https://ibb.co/5x1ZxTT1" 
    },
    { 
      name: "Fujitsu", 
      logo: "https://ibb.co/gLYmTsft" 
    },
    { 
      name: "Lenovo", 
      logo: "https://ibb.co/8LwVyhWH" 
    },
    { 
      name: "Blue Turtle", 
      logo: "https://ibb.co/1tkvrRXW" 
    },
    { 
      name: "ETS", 
      logo: "https://ibb.co/F4PMBS4Q" 
    },
    { 
      name: "RDC Technology", 
      logo: "https://ibb.co/358rFWWP" 
    }
  ];

  return (
    <section id="partners" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Trusted Partners</h2>
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