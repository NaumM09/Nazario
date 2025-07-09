import React, { useState } from 'react';
import { Building2, Smartphone, AtSign, Calendar, Send, CheckCircle2 } from 'lucide-react';
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Building2 />,
      title: "Our Location",
      details: ["Unit 36, Carrowmore Park Norfolk Road", "Halfway Gardens, Midrand Gauteng", "South Africa","1685"]
    },
    {
      icon: <Smartphone />,
      title: "Phone Numbers",
      details: [ "+27 82 987 6543"]
    },
    {
      icon: <AtSign />,
      title: "Email Address",
      details: ["info@nazairotechnologies.com"]
    },
    {
      icon: <Calendar />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: Closed", "Sunday: Closed"]
    }
  ];

  const services = [
    "Cloud Infrastructure",
    "Cybersecurity Solutions",
    "Data Analytics",
    "Digital Transformation",
    "IT Consulting",
    "Managed Services",
    "Software Development",
    "Other"
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information Cards */}
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-icon">
                  {info.icon}
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                <div className="contact-info-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-container">
              <h2 className="form-title">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle2 />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+27 82 123 4567"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;