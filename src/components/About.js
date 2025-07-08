import React from 'react';
import { CheckCircle, Globe, ShieldCheck, Users, Target, Eye, Heart } from 'lucide-react';
import "../styles/About.css";

const About = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: "Our Mission",
      description: "To provide Technology that will enable our clients to achieve and sustain their Corporate Objectives as well as equip them to be competitive thus impacting positively to Economic growth."
    },
    {
      icon: <Eye size={24} />,
      title: "Our Vision",
      description: "We aim to be the continent leader in providing Telecoms, IT, Multimedia & digital Solutions and Technologies that will add value to Private and Public sector."
    },
    {
      icon: <Heart size={24} />,
      title: "Our Values",
      description: "We honour our clients, since our future is in their hands. We believe in the power of unity, development of companies and employment through training and skills development."
    }
  ];

  const capabilities = [
    {
      title: "Level 1 BBBEE Company",
      description: "Broad-based transformation compliance"
    },
    {
      title: "Professional Services", 
      description: "Technology supply domain expertise"
    },
    {
      title: "Corporate Governance",
      description: "Visible responsibilities and accountability"
    },
    {
      title: "Skills Development",
      description: "Training and development focus"
    }
  ];

  return (
    <section id="about" className="section section-dark">
      <div className="container">
        {/* Main About Content */}
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              About <span className="text-yellow">Nazairo</span>
            </h2>
            
            {/* Who We Are - Combined content */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                color: '#C8A044', 
                marginBottom: '16px' 
              }}>
                WHO WE ARE
              </h3>
              <p style={{ fontSize: '18px', color: '#9CA3AF', lineHeight: '1.6', marginBottom: '16px' }}>
                Nazairo Technologies is a broad-based Level 1 BBBEE company, providing professional 
                services in the technology supply domains. We are targeting being the key players in 
                combating the digital gap in the African continent through participation and provisioning 
                of top of the class IT, Telecoms & Multimedia Solutions and Technologies.
              </p>
              <p style={{ fontSize: '16px', color: '#9CA3AF', lineHeight: '1.6' }}>
                Critical to your IT returning value, is the alignment of technology capabilities 
                with the business requirements. Our hierarchy ensures that organizational 
                responsibilities are visible and each personnel is accountable for their activities 
                thus ensuring proper Corporate Governance.
              </p>
            </div>
            
            {/* Capabilities Grid */}
            <div className="feature-list">
              {capabilities.map((capability, index) => (
                <div key={index} className="feature-item">
                  <CheckCircle size={24} className="feature-icon" />
                  <div className="feature-content">
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-placeholder">
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <Users size={80} style={{ color: '#C8A044', opacity: 0.5, marginBottom: '16px' }} />
                <p style={{ color: '#9CA3AF', fontSize: '14px' }}>About Image Placeholder</p>
                <p style={{ color: '#6B7280', fontSize: '12px' }}>Team Photo / Office / African Tech Hub</p>
              </div>
              
              {/* Africa continent silhouette overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg viewBox="0 0 200 200" style={{ width: '200px', height: '200px' }}>
                  <path 
                    d="M100 20C120 25 140 35 150 50C160 70 165 90 160 110C155 130 145 145 130 155C115 165 100 170 85 165C70 160 55 150 45 135C35 120 30 100 35 80C40 60 55 45 75 35C85 30 95 22 100 20Z" 
                    fill="currentColor" 
                    style={{ color: 'rgba(200, 160, 68, 0.2)' }}
                  />
                </svg>
              </div>
              
              {/* Floating Elements */}
              <div className="floating-element top-left">
                <Globe size={24} style={{ color: '#C8A044' }} />
              </div>
              
              <div className="floating-element bottom-right">
                <ShieldCheck size={32} style={{ color: '#3B82F6' }} />
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="about-stats">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#C8A044' }}>Level 1</div>
                <div style={{ fontSize: '12px', color: '#9CA3AF' }}>BBBEE</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#C8A044' }}>10+</div>
                <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Years</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#C8A044' }}>50+</div>
                <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Experts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div style={{ marginTop: '80px' }}>
          <div className="grid grid-3" style={{ gap: '32px' }}>
            {values.map((value, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  color: '#C8A044', 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {value.icon}
                </div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  marginBottom: '16px',
                  color: '#C8A044'
                }}>
                  {value.title}
                </h3>
                <p style={{ 
                  color: '#9CA3AF', 
                  lineHeight: '1.6',
                  fontSize: '14px'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;