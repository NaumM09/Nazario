import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowRight,
  Star,
  Users,
  Award,
  ShieldCheck
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["info@nazairotech.com", "support@nazairotech.com"]
    },
    {
      icon: <Phone size={24} />,
      title: "Phone", 
      details: ["+27 (0) 11 234 5678", "+27 (0) 87 550 7890"]
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: ["123 Technology Drive", "Johannesburg, 2000", "South Africa"]
    },
    {
      icon: <Clock size={24} />,
      title: "Operating Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "24/7 Emergency Support"]
    }
  ];

  const whyChooseUs = [
    { icon: <Star size={20} />, text: "Certified by leading technology partners" },
    { icon: <Users size={20} />, text: "500+ satisfied clients across Africa" },
    { icon: <Award size={20} />, text: "10+ years of proven excellence" },
    { icon: <ShieldCheck size={20} />, text: "99.9% uptime guarantee" }
  ];

  return (
    <section id="contact" className="section section-black">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">
            Get In <span className="text-yellow">Touch</span>
          </h2>
          <p className="section-subtitle">
            Ready to transform your business with cutting-edge IT solutions? Let's discuss how we can help accelerate your growth.
          </p>
        </div>
        
        <div className="contact-content">
          {/* Contact Form */}
          <div>
            <div style={{
              background: 'rgba(17, 24, 39, 0.5)',
              border: '1px solid rgba(200, 160, 68, 0.2)',
              borderRadius: '16px',
              padding: '32px'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '24px' 
              }}>
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Company</label>
                  <input 
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Service Interest</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="managed-it">Managed IT Services</option>
                    <option value="cloud-storage">Cloud & Storage Solutions</option>
                    <option value="network-monitoring">Network Monitoring</option>
                    <option value="backup-recovery">Backup & Recovery</option>
                    <option value="it-support">IT Support & Consulting</option>
                    <option value="performance-optimization">Performance Optimization</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell us about your IT needs and challenges..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn btn-primary btn-large"
                  style={{ width: '100%' }}
                >
                  Send Message <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="contact-info">
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '24px' 
              }}>
                Contact Information
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{item.title}</h3>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} style={{
                          color: item.title === "Operating Hours" && detail.includes("24/7") 
                            ? "#C8A044" 
                            : "#9CA3AF",
                          fontWeight: detail.includes("24/7") ? "500" : "normal"
                        }}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Response */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(200, 160, 68, 0.1), rgba(59, 130, 246, 0.1))',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(200, 160, 68, 0.2)'
            }}>
              <h4 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <MessageCircle size={24} style={{ color: '#C8A044' }} />
                Quick Response
              </h4>
              <p style={{ 
                color: '#9CA3AF', 
                marginBottom: '24px' 
              }}>
                Need immediate assistance? Our support team is standing by 24/7 to help with any urgent IT issues or emergencies.
              </p>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px' 
              }}>
                <button 
                  className="btn"
                  style={{
                    background: '#059669',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <MessageCircle size={20} />
                  WhatsApp Support
                </button>
                <button className="btn btn-secondary">
                  Live Chat
                </button>
              </div>
            </div>

            {/* Why Choose Nazairo */}
            <div style={{
              background: 'rgba(17, 24, 39, 0.5)',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(200, 160, 68, 0.2)'
            }}>
              <h4 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: '16px' 
              }}>
                Why Choose Nazairo?
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {whyChooseUs.map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px' 
                  }}>
                    <div style={{ color: '#C8A044' }}>
                      {item.icon}
                    </div>
                    <span style={{ color: '#9CA3AF' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;