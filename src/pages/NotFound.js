import React from 'react';
import MainLayout from '../layouts/MainLayout';
import '../styles/custom.css';

const NotFound = () => {
  return (
    <MainLayout>
      <section className="d-flex justify-content-center align-items-center vh-100 flex-column text-center">
        <h1 className="display-1 text-gold">404</h1>
        <p className="lead">Oops! Page not found.</p>
        <a href="/" className="btn btn-gold">Go Home</a>
      </section>
    </MainLayout>
  );
};

export default NotFound;