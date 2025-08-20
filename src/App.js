// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import "./components/Hero.css";
// import "./App.css"; 
// import About from "./components/About";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {loading ? (
          <div className="loading-container">
            <div className="loading-truck">🚚</div>
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* Add Stats and Testimonials to home page */}
            {window.location.pathname === "/" && (
              <>
                <Stats />
                <Testimonials />
              </>
            )}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

