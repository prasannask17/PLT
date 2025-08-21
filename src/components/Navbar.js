import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import pltLogo from "../assets/PLT_logo.jpg";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: "house-fill" },
    { path: "/about", label: "About", icon: "info-circle-fill" },
    { path: "/services", label: "Services", icon: "truck" },
    { path: "/contact", label: "Contact", icon: "envelope-fill" }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${
      scrolled ? 'navbar-scrolled' : 'navbar-transparent'
    }`}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div className="logo-container">
            <img src={pltLogo} alt="PLT Logo" className="navbar-logo" />
          </div>
          <div className="brand-text">
            <span className="brand-name">PREMALATHA</span>
            <span className="brand-subtitle">TRANSPORT</span>
          </div>
        </Link>

        <button 
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className={`bi bi-${item.icon} me-2`}></i>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link className="nav-link quote-btn" to="/contact">
                <i className="bi bi-calculator me-2"></i>
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          padding: 15px 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          z-index: 1000;
        }

        .navbar-transparent {
          background: rgba(26, 54, 93, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-scrolled {
          background: rgba(26, 54, 93, 0.98);
          padding: 10px 0;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 2px solid var(--secondary-color);
        }

        .logo-container {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          overflow: hidden;
          margin-right: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .navbar-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .brand-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--white);
          letter-spacing: 1px;
        }

        .brand-subtitle {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--secondary-color);
          letter-spacing: 2px;
        }

        .navbar-toggler {
          border: none;
          padding: 8px 12px;
          background: rgba(229, 62, 62, 0.1);
          border-radius: 8px;
          color: var(--white);
          font-size: 1.2rem;
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 500;
          padding: 12px 20px !important;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          margin: 0 5px;
        }

        .nav-link:hover {
          color: var(--white) !important;
          background: rgba(229, 62, 62, 0.1);
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: var(--white) !important;
          background: linear-gradient(135deg, var(--secondary-color), #c53030);
          box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
        }

        .quote-btn {
          background: linear-gradient(135deg, var(--secondary-color), #c53030) !important;
          color: var(--white) !important;
          font-weight: 600;
          margin-left: 10px;
          box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
        }

        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(229, 62, 62, 0.4);
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(26, 54, 93, 0.98);
            margin-top: 20px;
            padding: 20px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav-link {
            margin: 5px 0;
          }

          .quote-btn {
            margin-left: 0;
            margin-top: 10px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;