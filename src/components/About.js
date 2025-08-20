import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/About.css"; // Ensure you create and style this file properly

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero text-white text-center py-5">
        <h1 className="display-4 fw-bold">About Premalatha Transport</h1>
      </div>

      {/* About Content Section */}
      <div className="container text-white py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="lead">
              Founded in the year 2000, Premalatha Transport has grown to become a
              trusted name in the transportation industry. What began as a single-vehicle
              operation has now expanded into a fleet of 20 vehicles, providing reliable
              and efficient transportation services.
            </p>
            <p className="lead">
              We take pride in our long-standing partnership with L&T, catering to their
              transportation needs with professionalism and dedication. Our commitment
              to excellence and customer satisfaction has been the driving force behind
              our growth and success.
            </p>
            <p className="lead">
              Premalatha Transport is owned and managed by Mr. Joseph and Mrs. Joseph,
              whose leadership and vision have been instrumental in shaping the company
              into what it is today. With a strong focus on safety, punctuality, and
              service quality, we continue to serve our clients with integrity and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
