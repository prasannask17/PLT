import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [counters, setCounters] = useState({
    years: 0,
    vehicles: 0,
    clients: 0,
    deliveries: 0
  });

  const finalValues = {
    years: 24,
    vehicles: 20,
    clients: 50,
    deliveries: 5000
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const increment = finalValues[key] / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues[key]) {
          currentValue = finalValues[key];
          clearInterval(intervals.find(interval => interval === this));
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <section className="hero">
      <div className="hero-background"></div>
      
      <div className="hero-floating-elements">
        <div className="floating-truck">🚛</div>
        <div className="floating-truck">🚚</div>
        <div className="floating-truck">🚐</div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <i className="bi bi-award-fill"></i>
          <span>Trusted Since 2000</span>
        </div>

        <h1>PREMALATHA TRANSPORT</h1>
        
        <div className="hero-subtitle">
          Your Reliable Logistics Partner
        </div>

        <p className="hero-description">
          Experience excellence in transportation with our modern fleet, professional drivers, 
          and commitment to delivering your cargo safely and on time across South India.
        </p>

        <div className="hero-buttons">
          <Link to="/services" className="btn btn-hero-primary">
            <i className="bi bi-truck"></i>
            Explore Services
          </Link>
          <Link to="/contact" className="btn btn-hero-secondary">
            <i className="bi bi-telephone-fill"></i>
            Get Free Quote
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">{counters.years}+</span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">{counters.vehicles}+</span>
            <span className="hero-stat-label">Fleet Vehicles</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">{counters.clients}+</span>
            <span className="hero-stat-label">Happy Clients</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">{counters.deliveries}+</span>
            <span className="hero-stat-label">Deliveries</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <i className="bi bi-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;