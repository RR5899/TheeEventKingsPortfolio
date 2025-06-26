import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/custom.css';

AOS.init({ duration: 1000, once: true });

const Footer = () => {
  return (
    <footer className="bg-dark-gradient text-white pt-5 pb-4 mt-5" data-aos="fade-up">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-gold elegant-font">The Event Kings</h5>
            <p>
              Elevating every celebration. With over 10 years of experience, we create unforgettable moments for
              weddings, birthdays, and corporate events.
            </p>
          </div>

          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-gold elegant-font">Contact</h5>
            <p><FaMapMarkerAlt className="me-2" /> 123 Celebration Street, Mumbai, India</p>
            <p><FaPhoneAlt className="me-2" /> +91 1234567890</p>
            <p><FaEnvelope className="me-2" /> theeeventking@gmail.com</p>
          </div>

          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-gold elegant-font">Follow Us</h5>
            <a href="#" className="text-white me-3 fs-4 hover-gold"><FaFacebook /></a>
            <a href="#" className="text-white me-3 fs-4 hover-gold"><FaInstagram /></a>
            <a href="#" className="text-white fs-4 hover-gold"><FaTwitter /></a>
          </div>
        </div>
        <hr className="my-3 text-gold" />
        <div className="row text-center">
          <div className="col-md-12">
            <p className="mb-0">© {new Date().getFullYear()} The Team Developer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
