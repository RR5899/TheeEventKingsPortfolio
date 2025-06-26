import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Import Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  duration: 800,      // animation duration (ms)
  offset: 120,        // offset from the top before triggering
  once: true,         // animate only once per element
  easing: 'ease-in-out', // animation easing
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);






