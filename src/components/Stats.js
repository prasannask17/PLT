import React, { useState, useEffect } from "react";
import "./Stats.css";

const Stats = () => {
  const [counters, setCounters] = useState({
    years: 0,
    vehicles: 0,
    clients: 0,
    deliveries: 0
  });

  const finalValues = {
    years: 24,
    vehicles: 20,
    clients: 30,
    deliveries: 5000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
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

  const stats = [
    {
      icon: "🏆",
      value: counters.years,
      suffix: "+",
      label: "Years of Excellence",
      description: "Serving the industry since 2000"
    },
    {
      icon: "🚛",
      value: counters.vehicles,
      suffix: "+",
      label: "Fleet Vehicles",
      description: "Modern and well-maintained fleet"
    },
    {
      icon: "🤝",
      value: counters.clients,
      suffix: "+",
      label: "Happy Clients",
      description: "Trusted by businesses nationwide"
    },
    {
      icon: "📦",
      value: counters.deliveries,
      suffix: "+",
      label: "Successful Deliveries",
      description: "On-time and secure deliveries"
    }
  ];

  return (
    <div className="stats-section">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3">Our Achievements</h2>
            <p className="lead">Numbers that speak for our commitment to excellence</p>
          </div>
        </div>
        
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  {stat.value}{stat.suffix}
                </div>
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;