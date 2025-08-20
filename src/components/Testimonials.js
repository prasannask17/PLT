import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Suresh Babu",
      company: "Chennai Construction Ltd",
      position: "Site Manager",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Premalatha Transport has been handling our construction material delivery for 3 years. Always on time and professional service."
    },
    {
      name: "Meera Krishnan",
      company: "Tamil Nadu Industries",
      position: "Operations Manager",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Reliable transport service within Tamil Nadu. Their team ensures safe delivery of our industrial equipment."
    },
    {
      name: "Ravi Kumar",
      company: "Bangalore Tech Solutions",
      position: "Logistics Coordinator",
      image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Good service for our Chennai to Bangalore route. Professional drivers and well-maintained vehicles."
    },
    {
      name: "Lakshmi Devi",
      company: "Kerala Spices Co",
      position: "Transport Manager",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Trusted partner for our spice transportation from Kerala to Tamil Nadu. Safe handling and timely delivery."
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
            <p className="lead">Trusted by businesses across South India</p>
          </div>
        </div>
        
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-6">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h5 className="testimonial-name">{testimonial.name}</h5>
                    <p className="testimonial-position">
                      {testimonial.position} at {testimonial.company}
                    </p>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="testimonial-content">
                  <i className="bi bi-quote quote-icon"></i>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;