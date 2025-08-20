import React from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import pltLogo from "../assets/PLT_logo.jpg"; // Ensure correct path

const Navbar = () => {
  const location = useLocation(); // Get current page URL

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#111", borderBottom: "3px solid red" }}>
      <div className="container-fluid">
        {/* Logo & Brand Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={pltLogo} alt="PLT Logo" style={{ height: "45px", marginRight: "10px" }} />
          <span style={{
            fontSize: "22px",
            fontWeight: "bold",
            letterSpacing: "1px",
            color: "#fff",
            fontFamily: "'Oswald', sans-serif",
            textTransform: "uppercase"
          }}>
            PREMALATHA TRANSPORT
          </span>
        </Link>

        {/* Toggle Button for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link fw-bold ${location.pathname === "/" ? "text-danger border-bottom border-danger" : "text-white"}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fw-bold ${location.pathname === "/about" ? "text-danger border-bottom border-danger" : "text-white"}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fw-bold ${location.pathname === "/services" ? "text-danger border-bottom border-danger" : "text-white"}`} to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fw-bold ${location.pathname === "/contact" ? "text-danger border-bottom border-danger" : "text-white"}`} to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white login-icon" to="/login">
                <i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }}></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
