import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; // Import styles

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>PREMALATHA TRANSPORT</h1>
        <p>Reliable & Fast Transport Solutions</p>
        <Link to="/services" className="btn-primary">
          Explore Services
        </Link>
        <Link to="/contact" className="btn-secondary">
          Get Quote
        </Link>
      </div>
    </section>
  );
};

export default Hero;


