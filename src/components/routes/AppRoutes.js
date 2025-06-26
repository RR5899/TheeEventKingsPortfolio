import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import Blogs from '../pages/Blogs';

function AppRoutes() {
  return (
    <Routes>
      {/* Load Home on first visit */}
      <Route path="/" element={<Home />} />

      {/* Define all other valid routes */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blogs" element={<Blogs />} />

      {/* Redirect all unknown routes to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
