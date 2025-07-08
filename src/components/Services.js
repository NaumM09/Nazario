import React from 'react';
import { 
  Satellite, 
  Cloud, 
  ShieldCheck, 
  Database, 
  Headphones, 
  Monitor,
  CheckCircle, 
  ArrowRight,
  Users,
  Globe,
  Server,
  Wifi
} from 'lucide-react';
import '../styles/Services.css';


const Services = () => {
  const services = [
    {
      icon: <Satellite size={32} />,
      title: "Satellite Solutions",
      description: "Comprehensive satellite communication services including SES broadband, traffic optimization, and network management.",
      features: ["SES Broadband Service", "Traffic Optimization", "Network Management"],
      image: "satellite-solutions"
    },
    {
      icon: <Monitor size={32} />,
      title: "IT Infrastructure Monitoring", 
      description: "Complete monitoring solutions for cloud, applications, servers, and network infrastructure with unified dashboards.",
      features: ["Cloud Monitoring", "Application Monitoring", "Network Monitoring"],
      image: "infrastructure-monitoring"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "ICT Security",
      description: "Advanced cybersecurity solutions protecting against internal and external threats with comprehensive access management.",
      features: ["Cyber Security", "Data Security", "Access Management"],
      image: "ict-security"
    },
    {
      icon: <Wifi size={32} />,
      title: "Networking & Infrastructure",
      description: "Complete networking solutions including servers, data centers, cabling, and connectivity infrastructure.",
      features: ["Data Centre Solutions", "Firewall Services", "LAN/WAN Setup"],
      image: "networking-infrastructure"
    },
    {
      icon: <Database size={32} />,
      title: "Storage Solutions",
      description: "Scalable storage solutions including SAN, NAS, cloud services, and comprehensive data management systems.",
      features: ["SAN & NAS", "Cloud Services", "Data Backup"],
      image: "storage-solutions"
    },
    {
      icon: <Headphones size={32} />,
      title: "Professional & Managed Services",
      description: "Expert consulting, managed services, ITSM solutions, and comprehensive support for all your IT needs.",
      features: ["IT Consulting", "Managed Services", "Call Centre Support"],
      image: "professional-services"
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Consultation", 
      description: "Understanding your business needs and IT challenges", 
      icon: <Users size={28} /> 
    },
    { 
      step: "02", 
      title: "Planning", 
      description: "Strategic roadmap and solution design", 
      icon: <Globe size={28} /> 
    },
    { 
      step: "03", 
      title: "Implementation", 
      description: "Professional deployment and integration", 
      icon: <Server size={28} /> 
    },
    { 
      step: "04", 
      title: "Support", 
      description: "Ongoing monitoring and optimization", 
      icon: <Headphones size={28} /> 
    }
  ];

  return (
    <section id="services" className="section section-black">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">
            Our <span className="text-yellow">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive IT solutions across satellite communications, security, infrastructure, and professional services.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <div style={{ 
                  textAlign: 'center', 
                  position: 'relative', 
                  zIndex: 10,
                  color: '#C8A044'
                }}>
                  {service.icon}
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.5)', 
                    fontSize: '11px', 
                    marginTop: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {service.image}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                
                <ul className="card-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <CheckCircle size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href="#" className="card-link">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px' }}>
              Our <span className="text-yellow">Process</span>
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
              A proven methodology that ensures successful IT implementations and ongoing support.
            </p>
          </div>
          
          <div className="process-grid">
            {processSteps.map((process, index) => (
              <div key={index} className="process-step-glass">
                <div className="process-icon-container">
                  <div style={{ color: '#C8A044' }}>
                    {process.icon}
                  </div>
                  <div className="process-step-number">
                    {process.step}
                  </div>
                </div>
                <h4 style={{ 
                  fontSize: '18px', 
                  fontWeight: '600', 
                  marginBottom: '8px',
                  color: '#ffffff'
                }}>
                  {process.title}
                </h4>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Categories Overview */}
        <div className="cta-banner-glass" style={{ marginTop: '80px' }}>
          <h3 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            color: '#ffffff'
          }}>
            Complete <span style={{ color: '#C8A044' }}>Technology Solutions</span>
          </h3>
          <p style={{ 
            fontSize: '18px', 
            color: 'rgba(255, 255, 255, 0.7)', 
            maxWidth: '800px', 
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            From satellite communications to cybersecurity, storage solutions to professional services - 
            we provide comprehensive technology solutions tailored for African businesses.
          </p>
          <button 
            className="btn-glass"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;