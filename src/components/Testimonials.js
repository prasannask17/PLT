import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "L&T Construction",
      position: "Project Manager",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Premalatha Transport has been our trusted partner for over 5 years. Their reliability and professionalism in handling our construction equipment transportation is unmatched."
    },
    {
      name: "Priya Sharma",
      company: "Industrial Solutions Ltd",
      position: "Logistics Head",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Exceptional service quality and on-time deliveries. Their team goes above and beyond to ensure our cargo reaches safely. Highly recommended for industrial transportation."
    },
    {
      name: "Mohammed Ali",
      company: "Tech Manufacturing",
      position: "Supply Chain Manager",
      image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Professional, efficient, and cost-effective. Premalatha Transport has streamlined our logistics operations significantly. Their tracking system is excellent."
    },
    {
      name: "Anita Reddy",
      company: "Export House",
      position: "Operations Director",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Outstanding customer service and attention to detail. They handle our sensitive equipment with utmost care. A reliable partner for all our transportation needs."
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
            <p className="lead">Trusted by businesses across industries</p>
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