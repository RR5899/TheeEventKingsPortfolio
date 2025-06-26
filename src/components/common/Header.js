// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// //import logo from '../../assets/logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../../styles/custom.css';

// AOS.init({ duration: 1000, once: true });

// const Header = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   const menuItems = [
//     { name: 'Home', to: '/' },
//     { name: 'About', to: '/about' },
//     { name: 'Gallery', to: '/gallery' },
   
//     { name: 'Contact', to: '/contact' },
//   ];

//   return (
//     <header className="shadow sticky-top bg-dark-gradient text-white fancy-border" data-aos="zoom-in-down">
//       <nav className="navbar navbar-expand-lg navbar-dark container py-3">
//         <Link className="navbar-brand d-flex align-items-center" to="/">
//           <img src="Logo.png" alt="Logo" style={{ height: '50px' }} className="me-2 rounded-circle floating-logo" />
//           <span className="fs-3 fw-bold elegant-font text-gold">The Event King</span>
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav gap-3">
//             {menuItems.map((item) => (
//               <li className="nav-item" key={item.to}>
//                 <Link
//                   className={`nav-link px-3 py-2 rounded-pill text-gold link-hover ${
//                     isActive(item.to) ? 'active-link' : ''
//                   }`}
//                   to={item.to}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/custom.css';

AOS.init({ duration: 1000, once: true });

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className="shadow sticky-top bg-dark-gradient text-white fancy-border" data-aos="zoom-in-down">
      <nav className="navbar navbar-expand-lg navbar-dark container-fluid px-3 py-2">
        <div className="container-fluid px-2">
          {/* Logo and Brand */}
          <div className="d-flex justify-content-between align-items-center w-100">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img
                src="Logo.png"
                alt="Logo"
                style={{ height: '50px' }}
                className="me-2 rounded-circle floating-logo"
              />
              <span className="fs-3 fw-bold elegant-font text-gold">The Event King</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Collapsed Menu */}
          <div className="collapse navbar-collapse justify-content-lg-end mt-3 mt-lg-0" id="navbarNav">
            <ul className="navbar-nav w-100 text-center text-lg-end flex-column flex-lg-row gap-2 gap-lg-3">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.to}>
                  <Link
                    className={`nav-link px-3 py-2 rounded-pill text-gold link-hover ${
                      isActive(item.to) ? 'active-link' : ''
                    }`}
                    to={item.to}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
