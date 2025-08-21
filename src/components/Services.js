import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "🚛",
      title: "Heavy Cargo Transport",
      description: "Specialized transportation for heavy machinery and industrial equipment with proper safety measures and expert handling.",
      features: ["24/7 GPS Tracking", "Comprehensive Insurance", "Expert Loading Team", "Safety Certified Drivers"]
    },
    {
      icon: "📦",
      title: "Logistics Solutions",
      description: "End-to-end logistics management for businesses with warehousing, distribution, and supply chain optimization.",
      features: ["Warehouse Storage", "Inventory Management", "Last Mile Delivery", "Supply Chain Optimization"]
    },
    {
      icon: "🏗️",
      title: "Construction Support",
      description: "Dedicated transport services for construction materials and equipment delivery to project sites across South India.",
      features: ["Site-to-Site Delivery", "Material Handling", "Project Coordination", "Flexible Scheduling"]
    },
    {
      icon: "⚡",
      title: "Express Delivery",
      description: "Fast and reliable express delivery services for urgent shipments and time-sensitive cargo with priority handling.",
      features: ["Same Day Delivery", "Real-time Updates", "Priority Handling", "Emergency Transport"]
    },
    {
      icon: "🌍",
      title: "Interstate Transport",
      description: "Long-distance transportation services connecting major cities across multiple states with optimized routes.",
      features: ["Route Optimization", "Fuel Efficient Fleet", "Scheduled Services", "Multi-State Coverage"]
    },
    {
      icon: "🔧",
      title: "Specialized Equipment",
      description: "Transportation of specialized equipment with custom handling protocols and safety measures for unique cargo.",
      features: ["Custom Solutions", "Safety Certified", "Expert Handling Team", "Specialized Vehicles"]
    }
  ];

  const features = [
    {
      icon: "🛡️",
      title: "Safety First",
      description: "All our vehicles are equipped with latest safety features and our drivers are professionally trained."
    },
    {
      icon: "📱",
      title: "Real-time Tracking",
      description: "Track your shipment in real-time with our advanced GPS tracking system and mobile app."
    },
    {
      icon: "⏰",
      title: "On-time Delivery",
      description: "We guarantee 99.5% on-time delivery rate with our efficient logistics management system."
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description: "Get the best value for your money with our transparent and competitive pricing structure."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="animate-fade-down">Our Services</h1>
            <p className="lead animate-fade-up">
              Comprehensive transportation solutions tailored to meet your business needs 
              with reliability, safety, and professional excellence
            </p>
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="bi bi-check-circle-fill"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="service-btn">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-gray-900 animate-fade-up">Why Choose Us</h2>
            <p className="lead text-gray-600 animate-fade-up">
              Experience the difference with our commitment to excellence and customer satisfaction
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="animate-fade-up">Ready to Get Started?</h2>
            <p className="lead animate-fade-up">
              Contact us today for a customized transportation solution that meets your specific 
              business requirements and budget
            </p>
            <div className="cta-buttons animate-fade-up">
              <Link to="/contact" className="cta-btn-primary">
                <i className="bi bi-envelope-fill"></i>
                Get Free Quote
              </Link>
              <a href="tel:+919876543210" className="cta-btn-secondary">
                <i className="bi bi-telephone-fill"></i>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;