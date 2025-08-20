import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="display-4 fw-bold text-center mb-4">Contact Us</h1>
          <p className="lead text-center">
            Get in touch with us for all your transportation needs
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-8">
            <div className="contact-form-container">
              <h2 className="mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Service Required</label>
                    <select
                      className="form-control"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="heavy-cargo">Heavy Cargo Transport</option>
                      <option value="logistics">Logistics Solutions</option>
                      <option value="construction">Construction Support</option>
                      <option value="express">Express Delivery</option>
                      <option value="interstate">Interstate Transport</option>
                      <option value="specialized">Specialized Equipment</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your transportation requirements..."
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-danger btn-lg">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="contact-info">
              <h3 className="mb-4">Get in Touch</h3>
              
              <div className="contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <h5>Address</h5>
                  <p>123 Transport Street<br />Chennai, Tamil Nadu 600001</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <h5>Phone</h5>
                  <p>+91 98765 43210<br />+91 87654 32109</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-envelope-fill"></i>
                <div>
                  <h5>Email</h5>
                  <p>info@premalathatransport.com<br />support@premalathatransport.com</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-clock-fill"></i>
                <div>
                  <h5>Business Hours</h5>
                  <p>Mon - Sat: 8:00 AM - 8:00 PM<br />Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="social-links mt-4">
                <h5>Follow Us</h5>
                <div className="social-icons">
                  <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;