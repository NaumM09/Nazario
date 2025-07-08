import React from 'react';
import "../styles/Partners.css";

const Partners = () => {
  const partners = [
    { 
      name: "NetApp", 
      logo: "https://i.ibb.co/7N4GbkbX/netapp.png"
    },
    { 
      name: "Cloudera", 
      logo: "https://i.ibb.co/tpFWcRqf/cloudera.png" 
    },
    { 
      name: "Huawei", 
      logo: "https://i.ibb.co/C5Dhdk9h/huawei.png" 
    },
    { 
      name: "Octopus Technologies", 
      logo: "https://i.ibb.co/DftLhvym/octopus.png" 
    },
    { 
      name: "PTPI Group", 
      logo: "https://i.ibb.co/cXyqXJJy/ptpi.png" 
    },
    { 
      name: "Fujitsu", 
      logo: "https://i.ibb.co/21JWtXCc/fujitsu.png" 
    },
    { 
      name: "Lenovo", 
      logo: "https://i.ibb.co/Ndqz048M/lenovo.png" 
    },
    { 
      name: "Blue Turtle", 
      logo: "https://i.ibb.co/VcsjgMC4/blue-turtle.png" 
    },
    { 
      name: "ETS", 
      logo: "https://i.ibb.co/yF318wFz/ets.png" 
    },
    { 
      name: "RDC Technology", 
      logo: "https://i.ibb.co/4wDmSMM0/rdc.png" 
    }
  ];

  return (
    <section id="partners" className="section section-dark">
      <div className="container">
        <h2 className="section-title partners-title">Trusted Partners</h2>
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