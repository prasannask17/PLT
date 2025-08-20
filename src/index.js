import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Performance monitoring (optional)
reportWebVitals();

// Spider-Man Web Cursor Effect
document.addEventListener("mousemove", (e) => {
  const web = document.createElement("div");
  web.classList.add("spider-web");
  document.body.appendChild(web);

  // Set position
  web.style.left = `${e.clientX}px`;
  web.style.top = `${e.clientY}px`;

  // Remove after animation completes
  setTimeout(() => {
    web.remove();
  }, 500); // Reduced to 500ms for better performance
});


