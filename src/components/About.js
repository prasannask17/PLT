import React from "react";
import "./About.css";

const About = () => {
  const highlights = [
    {
      icon: "🏆",
      title: "Industry Leader",
      description: "Over two decades of excellence in transportation services across South India."
    },
    {
      icon: "🚛",
      title: "Modern Fleet",
      description: "20+ well-maintained vehicles equipped with latest safety and tracking technology."
    },
    {
      icon: "🤝",
      title: "Trusted Partner",
      description: "Long-standing partnership with L&T and other major corporations."
    },
    {
      icon: "🎯",
      title: "On-Time Delivery",
      description: "99.5% on-time delivery rate with real-time tracking and updates."
    }
  ];

  const timeline = [
    {
      year: "2000",
      title: "Company Founded",
      description: "Started with a single vehicle and a vision to provide reliable transportation services."
    },
    {
      year: "2005",
      title: "Fleet Expansion",
      description: "Expanded to 5 vehicles and established partnerships with local businesses."
    },
    {
      year: "2010",
      title: "L&T Partnership",
      description: "Became a trusted logistics partner for L&T, handling their transportation needs."
    },
    {
      year: "2015",
      title: "Technology Integration",
      description: "Implemented GPS tracking and digital logistics management systems."
    },
    {
      year: "2020",
      title: "Modern Fleet",
      description: "Upgraded to a fleet of 20+ modern vehicles with advanced safety features."
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Launched online platform for seamless booking and real-time tracking."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="animate-fade-down">About Premalatha Transport</h1>
            <p className="lead animate-fade-up">
              Building trust through reliable transportation solutions since 2000
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        <div className="container">
          <div className="about-section">
            <div className="about-card animate-fade-up">
              <h2>Our Story</h2>
              <p className="about-text">
                Founded in the year 2000, Premalatha Transport has grown from humble beginnings 
                to become a trusted name in the transportation industry. What began as a single-vehicle 
                operation driven by passion and dedication has now expanded into a comprehensive 
                logistics solution provider with a fleet of 20+ modern vehicles.
              </p>
              <p className="about-text">
                Our journey has been marked by continuous growth, technological advancement, and 
                an unwavering commitment to customer satisfaction. We have built our reputation 
                on reliability, safety, and professional service delivery across South India.
              </p>
              <p className="about-text">
                Today, we stand proud as a leading transportation company, serving diverse industries 
                and maintaining long-term partnerships with major corporations including L&T. Our 
                success story is a testament to our core values of integrity, excellence, and 
                customer-first approach.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="leadership-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-gray-900 animate-fade-up">Our Leadership</h2>
            <p className="lead text-gray-600 animate-fade-up">
              Meet the visionary leaders who have shaped our company's success
            </p>
          </div>
          
          <div className="leadership-grid">
            <div className="leader-card animate-fade-left">
              <div className="leader-avatar">👨‍💼</div>
              <h3 className="leader-name">Mr. Joseph</h3>
              <p className="leader-title">Founder & Managing Director</p>
              <p className="leader-description">
                With over 24 years of experience in the transportation industry, Mr. Joseph 
                has been the driving force behind our company's growth and success. His 
                vision and leadership have established Premalatha Transport as a trusted 
                name in logistics.
              </p>
            </div>
            
            <div className="leader-card animate-fade-right">
              <div className="leader-avatar">👩‍💼</div>
              <h3 className="leader-name">Mrs. Joseph</h3>
              <p className="leader-title">Co-Founder & Operations Director</p>
              <p className="leader-description">
                Mrs. Joseph brings exceptional organizational skills and operational 
                expertise to our company. Her attention to detail and commitment to 
                quality has been instrumental in maintaining our high service standards 
                and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-gray-900 animate-fade-up">Our Journey</h2>
            <p className="lead text-gray-600 animate-fade-up">
              Milestones that define our growth and commitment to excellence
            </p>
          </div>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
                <div className="timeline-marker"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;