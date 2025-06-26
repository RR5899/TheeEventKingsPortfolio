// // Section.js
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Section = ({ title, description, imgSrc, reverse = false }) => {
//   return (
//     <div
//       className={`row align-items-center py-5 gx-5 ${reverse ? 'flex-md-row-reverse' : ''}`}
//       data-aos={reverse ? 'fade-left' : 'fade-right'}
//     >
//       <div className="col-md-6 mb-4 mb-md-0">
//         <div className="position-relative rounded shadow section-image-wrapper overflow-hidden">
//           <img
//             src={imgSrc}
//             alt={title}
//             className="img-fluid section-image hover-zoom"
//             style={{ maxHeight: '420px', objectFit: 'cover', borderRadius: '20px' }}
//           />
//           <div className="image-overlay"></div>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <h3 className="text-gold fw-bold elegant-font mb-3 animated-heading">{title}</h3>
//         <p className="text-dark fs-5 fade-in-text">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Section;


// Section.js
import React from 'react';
import 'aos/dist/aos.css';
import '../../styles/custom.css'; // Ensure this has your custom styles

const Section = ({ title, description, imgSrc, reverse, ...rest }) => {
  return (
    <div
      className={`row align-items-center my-5 section-wrapper ${reverse ? 'flex-row-reverse' : ''}`}
      {...rest}
    >
      {/* Image Section */}
      <div
        className="col-md-6 mb-4 mb-md-0"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="zoom-hover shadow rounded overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="img-fluid w-100"
            style={{ transition: 'transform 0.5s ease-in-out' }}
          />
        </div>
      </div>

      {/* Text Section */}
      <div
        className="col-md-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3 className="elegant-font text-gold fw-bold">{title}</h3>
        <p className="text-dark fs-5 fade-in-text">{description}</p>
      </div>
    </div>
  );
};

export default Section;
