// // Contact.js
// import React, { useEffect } from 'react';
// import MainLayout from '../layouts/MainLayout';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Contact = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <MainLayout>
//       <div className="container my-5" data-aos="fade-up">
//         <div className="row mb-5">
//           <div className="col-md-6">
//             <h2 className="text-gold elegant-font fw-bold mb-4">Contact Us</h2>
//             <p className="text-muted fs-5">
//               We’d love to hear from you! Reach out with your event inquiries, and let’s make your celebration extraordinary.
//             </p>
//             <ul className="list-unstyled fs-5">
//               <li className="mb-2"><strong>📞 Phone:</strong> +91 98765 43210</li>
//               <li className="mb-2"><strong>✉️ Email:</strong> contact@auroraevents.in</li>
//               <li className="mb-2"><strong>📍 Address:</strong> Main Road, Mandla, Madhya Pradesh, India</li>
//             </ul>
//             <a
//               href="https://www.google.com/maps/dir/?api=1&destination=Mandla,+Madhya+Pradesh,+India"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-gold mt-4 px-4 py-2 rounded-pill shadow-sm"
//             >
//               🧭 Get Directions
//             </a>
//           </div>
//           <div className="col-md-6">
//             <div className="ratio ratio-4x3 shadow rounded overflow-hidden">
//               <iframe
//                 title="The Event King Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.617287151022!2d80.37133761440759!3d22.599010937540313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3983e3b2d6047a7d%3A0x9cf57032cb4c43d4!2sMandla%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1658823661596!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>
//         </div>

//         <div className="row" data-aos="fade-up">
//           <div className="col-md-8 offset-md-2">
//             <form className="p-5 border rounded shadow-lg bg-white">
//               <h4 className="text-gold elegant-font mb-4">Send Us a Message</h4>
//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <input type="text" className="form-control form-control-lg" placeholder="Your Name" required />
//                 </div>
//                 <div className="col-md-6">
//                   <input type="email" className="form-control form-control-lg" placeholder="Your Email" required />
//                 </div>
//                 <div className="col-12">
//                   <textarea className="form-control form-control-lg" rows="5" placeholder="Your Message" required></textarea>
//                 </div>
//                 <div className="col-12 text-end">
//                   <button type="submit" className="btn btn-gold px-5 py-3 fs-5 rounded-pill shadow">Send Message</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Contact;

// Contact.js
import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css'; // make sure btn-gold is defined here

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <MainLayout>
      <div className="container my-5" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-10 shadow rounded p-4 bg-white">
            <div className="row gy-4">
              {/* Left Contact Info */}
              <div className="col-md-6">
                <h2 className="text-gold elegant-font fw-bold mb-4">Contact Us</h2>
                <p className="text-muted fs-5">
                  We’d love to hear from you! Reach out with your event inquiries, and let’s make your celebration extraordinary.
                </p>
                <ul className="list-unstyled fs-5">
                  <li className="mb-2"><strong>📞 Phone:</strong> +91 98765 43210</li>
                  <li className="mb-2"><strong>✉️ Email:</strong> contact@auroraevents.in</li>
                  <li className="mb-2"><strong>📍 Address:</strong> Main Road, Mandla, Madhya Pradesh, India</li>
                </ul>
              </div>

              {/* Right Form */}
              <div className="col-md-6">
                <form className="p-4 border rounded shadow-sm bg-light h-100">
                  <h4 className="text-gold elegant-font mb-4 text-center">Send Us a Message</h4>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control form-control-lg" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control form-control-lg" placeholder="Your Email" required />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control form-control-lg" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-gold px-5 py-3 fs-5 rounded-pill shadow">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="text-center mt-5">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Mandla,+Madhya+Pradesh,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold px-4 py-2 rounded-pill shadow-sm"
              >
                🧭 Get Directions
              </a>
            </div>

            {/* Map Section */}
            <div className="ratio ratio-16x9 shadow rounded overflow-hidden mt-4">
              <iframe
                title="The Event King Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.617287151022!2d80.37133761440759!3d22.599010937540313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3983e3b2d6047a7d%3A0x9cf57032cb4c43d4!2sMandla%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1658823661596!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
