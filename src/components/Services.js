import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "🚛",
      title: "Heavy Cargo Transport",
      description: "Specialized transportation for heavy machinery and industrial equipment with proper safety measures.",
      features: ["24/7 Tracking", "Insurance Coverage", "Expert Handling"]
    },
    {
      icon: "📦",
      title: "Logistics Solutions",
      description: "End-to-end logistics management for businesses with warehousing and distribution services.",
      features: ["Warehouse Storage", "Inventory Management", "Last Mile Delivery"]
    },
    {
      icon: "🏗️",
      title: "Construction Support",
      description: "Dedicated transport services for construction materials and equipment to project sites.",
      features: ["Site Delivery", "Material Handling", "Project Coordination"]
    },
    {
      icon: "⚡",
      title: "Express Delivery",
      description: "Fast and reliable express delivery services for urgent shipments and time-sensitive cargo.",
      features: ["Same Day Delivery", "Real-time Updates", "Priority Handling"]
    },
    {
      icon: "🌍",
      title: "Interstate Transport",
      description: "Long-distance transportation services connecting major cities across multiple states.",
      features: ["Route Optimization", "Fuel Efficient", "Scheduled Services"]
    },
    {
      icon: "🔧",
      title: "Specialized Equipment",
      description: "Transportation of specialized equipment with custom handling and safety protocols.",
      features: ["Custom Solutions", "Safety Certified", "Expert Team"]
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1 className="display-4 fw-bold text-center mb-4">Our Services</h1>
          <p className="lead text-center">
            Comprehensive transportation solutions tailored to meet your business needs
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card h-100">
                <div className="service-icon">{service.icon}</div>
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
                <button className="btn btn-outline-danger mt-3">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">
            Contact us today for a customized transportation solution for your business
          </p>
          <button className="btn btn-danger btn-lg me-3">Get Quote</button>
          <button className="btn btn-outline-light btn-lg">Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default Services;