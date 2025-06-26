// About.js
import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const teamMembers = [
    {
      name: 'Ajal Pamnani',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Nisha Kapoor',
      role: 'Senior Event Planner',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Rahul Jain',
      role: 'Logistics & Coordination',
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Priya Sharma',
      role: 'Client Relations Manager',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Amit Verma',
      role: 'Lead Decor Artist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sneha Roy',
      role: 'Entertainment Coordinator',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <MainLayout>
      <div className="container my-5" data-aos="fade-up">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="elegant-font text-gold fw-bold mb-4">About The Event King</h2>
            <p>
              The Event King is a premium event management company with over a decade of experience crafting unforgettable celebrations.
              We specialize in weddings, birthdays, corporate events, and bespoke decorations tailored to your dreams.
            </p>
            <p>
              Our team of creative designers and event planners is dedicated to excellence, ensuring every moment is picture-perfect.
              With passion, precision, and luxury at our core, we’ve delighted clients across the country.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80"
              alt="Team The Event King"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        <h3 className="text-gold elegant-font text-center mb-4">Meet Our Team</h3>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" data-aos="fade-up">
          {teamMembers.map((member, index) => (
            <div key={index} className="col">
              <div className="text-center p-3 border rounded shadow h-100 bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle shadow mb-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <h5 className="fw-bold text-gold">{member.name}</h5>
                <p className="text-muted small mb-0">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
