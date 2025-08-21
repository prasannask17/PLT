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
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? 'navbar-scrolled' : 'navbar-transparent'
      }`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="brand-container">
              <div className="logo-wrapper">
                <img src={pltLogo} alt="PLT Logo" className="navbar-logo" />
                <div className="logo-glow"></div>
              </div>
              <div className="brand-text">
                <span className="brand-name">PREMALATHA</span>
                <span className="brand-subtitle">TRANSPORT</span>
              </div>
            </div>
          </Link>

          <button 
            className="navbar-toggler"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </span>
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
                    <i className={`bi bi-${item.icon}`}></i>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link className="nav-link quote-btn" to="/contact">
                  <i className="bi bi-calculator"></i>
                  <span>Get Quote</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          padding: 1rem 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
          z-index: 1000;
          border-bottom: 1px solid transparent;
        }

        .navbar-transparent {
          background: rgba(15, 23, 42, 0.8);
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        .navbar-scrolled {
          background: rgba(15, 23, 42, 0.95);
          padding: 0.75rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-bottom-color: var(--primary-color);
        }

        .brand-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-wrapper {
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .logo-wrapper:hover {
          transform: scale(1.05);
        }

        .navbar-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        .logo-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 12px;
        }

        .logo-wrapper:hover .logo-glow {
          opacity: 0.2;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-name {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--white);
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, var(--white), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-subtitle {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--gray-400);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .navbar-toggler {
          border: none;
          padding: 0.5rem;
          background: rgba(30, 64, 175, 0.1);
          border-radius: 8px;
          transition: var(--transition);
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        .navbar-toggler:hover {
          background: rgba(30, 64, 175, 0.2);
        }

        .navbar-toggler-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }

        .navbar-toggler-icon i {
          color: var(--white);
          font-size: 1.25rem;
        }

        .navbar-nav {
          gap: 0.5rem;
        }

        .nav-link {
          display: flex !important;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 500;
          padding: 0.75rem 1rem !important;
          border-radius: 8px;
          transition: var(--transition);
          position: relative;
          text-decoration: none;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover {
          color: var(--white) !important;
          background: rgba(30, 64, 175, 0.1);
          transform: translateY(-2px);
        }

        .nav-link:hover::before {
          width: 80%;
        }

        .nav-link.active {
          color: var(--white) !important;
          background: linear-gradient(135deg, var(--primary-color), var(--light-blue));
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
        }

        .nav-link.active::before {
          width: 0;
        }

        .quote-btn {
          background: linear-gradient(135deg, var(--secondary-color), #ef4444) !important;
          color: var(--white) !important;
          font-weight: 600;
          margin-left: 0.5rem;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
        }

        .quote-btn:hover {
          background: linear-gradient(135deg, #ef4444, var(--secondary-color)) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
        }

        .quote-btn::before {
          display: none;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(15, 23, 42, 0.98);
            margin-top: 1rem;
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
          }

          .navbar-nav {
            gap: 0.25rem;
          }

          .nav-link {
            padding: 1rem !important;
            justify-content: flex-start;
          }

          .quote-btn {
            margin-left: 0;
            margin-top: 0.5rem;
          }

          .brand-name {
            font-size: 1.25rem;
          }

          .brand-subtitle {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 576px) {
          .brand-text {
            display: none;
          }

          .logo-wrapper {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;