// // Gallery.js
// import React, { useEffect, useState } from 'react';
// import MainLayout from '../layouts/MainLayout';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/custom.css';

// const dummyImages = [
//   'one.jpeg',
//   'Courosol2.webp',
//   'three.jpeg',
//   'four.jpeg',
//   'five.jpeg',
//   'ten.jpeg',
//   'seven.jpeg',
//   'eight.jpeg',
//   'nine.jpeg'
// ];

// const dummyVideos = [
//   'https://www.youtube.com/embed/K4TOrB7at0Y',
//   'https://www.youtube.com/embed/fLexgOxsZu0',
//   'https://www.youtube.com/embed/JGwWNGJdvx8',
//   'https://www.youtube.com/embed/lWA2pjMjpBs',
//   'https://www.youtube.com/embed/dQw4w9WgXcQ'
// ];

// const Gallery = () => {
//   const [activeImage, setActiveImage] = useState(null);
//   const [hoverVideo, setHoverVideo] = useState(null);
//   const [activeVideo, setActiveVideo] = useState(null);

//   useEffect(() => {
//     AOS.init({ duration: 1200, once: true });
//   }, []);

//   const handleImageClick = (src) => {
//     setActiveImage(src === activeImage ? null : src);
//   };

//   const handleVideoClick = (index) => {
//     setActiveVideo(index === activeVideo ? null : index);
//   };

//   return (
//     <MainLayout>
//       <div className="container my-5">
//         <h2 className="text-center text-gold elegant-font fw-bold mb-5" data-aos="fade-up">Our Gallery</h2>

//         <div className="row g-4 mb-5">
//           {dummyImages.map((imgSrc, index) => (
//             <div
//               className="col-sm-6 col-md-4"
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="gallery-image-wrapper position-relative overflow-hidden rounded shadow-sm">
//                 <img
//                   src={imgSrc}
//                   loading="lazy"
//                   alt={`Gallery ${index}`}
//                   className={`img-fluid gallery-image ${activeImage === imgSrc ? 'active' : ''}`}
//                   onClick={() => handleImageClick(imgSrc)}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         <h3 className="text-center text-gold elegant-font fw-bold mb-4" data-aos="fade-up">Event Highlights</h3>
//         <div className="row g-4 justify-content-center mb-5">
//           {dummyVideos.map((videoUrl, i) => (
//             <div className="col-md-6" key={i} data-aos="zoom-in">
//               <div
//                 className="ratio ratio-16x9 shadow rounded overflow-hidden video-hover"
//                 onMouseEnter={() => setHoverVideo(i)}
//                 onMouseLeave={() => setHoverVideo(null)}
//                 onClick={() => handleVideoClick(i)}
//               >
//                 <iframe
//                   src={`${videoUrl}?autoplay=${hoverVideo === i || activeVideo === i ? 1 : 0}&mute=1`}
//                   title={`Event video ${i}`}
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           ))}
//         </div>

//         {activeImage && (
//           <div
//             className="fullscreen-overlay d-flex justify-content-center align-items-center"
//             onClick={() => setActiveImage(null)}
//           >
//             <img
//               src={activeImage}
//               alt="Full View"
//               className="img-fluid shadow-lg rounded zoom-in"
//               style={{ maxHeight: '90vh', maxWidth: '90vw' }}
//             />
//           </div>
//         )}

//         {activeVideo !== null && (
//           <div
//             className="fullscreen-overlay d-flex justify-content-center align-items-center"
//             onClick={() => setActiveVideo(null)}
//           >
//             <div className="ratio ratio-16x9 w-75 h-75">
//               <iframe
//                 src={`${dummyVideos[activeVideo]}?autoplay=1&mute=0`}
//                 title={`Fullscreen video ${activeVideo}`}
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         )}
//       </div>
//     </MainLayout>
//   );
// };

// export default Gallery;


// Gallery.js
import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../styles/custom.css';

const dummyImages = [
  'one.jpeg', 'Courosol2.webp', 'three.jpeg', 'four.jpeg', 'five.jpeg',
  'ten.jpeg', 'seven.jpeg', 'eight.jpeg', 'nine.jpeg',  'one.jpeg', 'Courosol2.webp', 'three.jpeg', 'four.jpeg', 'five.jpeg',
  'ten.jpeg', 'seven.jpeg', 'eight.jpeg', 'nine.jpeg'
];

const dummyVideos = [
  'https://www.youtube.com/embed/L8WV3T-tQ5Q',
  'https://www.youtube.com/embed/tHckmMuhVAs'
  
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [hoverVideo, setHoverVideo] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [visibleImages, setVisibleImages] = useState(6);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleImageClick = (src) => {
    setActiveImage(src === activeImage ? null : src);
  };

  const handleVideoClick = (index) => {
    setActiveVideo(index === activeVideo ? null : index);
  };

  const toggleImageVisibility = () => {
    if (showAll) {
      setVisibleImages(6);
      setShowAll(false);
    } else {
      setVisibleImages(dummyImages.length);
      setShowAll(true);
    }
  };

  return (
    <MainLayout>
      <div className="container my-5">
        <h2 className="text-center text-gold elegant-font fw-bold mb-5" data-aos="fade-up">Our Gallery</h2>

        <div className="row g-4 mb-4">
          {dummyImages.slice(0, visibleImages).map((imgSrc, index) => (
            <div
              className="col-sm-6 col-md-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="gallery-image-wrapper position-relative overflow-hidden rounded shadow">
                <img
                  src={imgSrc}
                  loading="lazy"
                  alt={`Gallery ${index}`}
                  className={`img-fluid gallery-image ${activeImage === imgSrc ? 'active' : ''}`}
                  onClick={() => handleImageClick(imgSrc)}
                  style={{ cursor: 'pointer', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-5">
          <button className="btn btn-outline-warning px-4 py-2 rounded-pill" onClick={toggleImageVisibility}>
            {showAll ? 'Show Less' : 'Show More Photos'}
          </button>
        </div>

        <h3 className="text-center text-gold elegant-font fw-bold mb-4" data-aos="fade-up">Event Highlights</h3>
        <div className="row g-4 justify-content-center mb-5">
          {dummyVideos.map((videoUrl, i) => (
            <div className="col-md-6" key={i} data-aos="zoom-in">
              <div
                className="ratio ratio-16x9 shadow rounded overflow-hidden video-hover"
                onMouseEnter={() => setHoverVideo(i)}
                onMouseLeave={() => setHoverVideo(null)}
                onClick={() => handleVideoClick(i)}
                style={{ cursor: 'pointer' }}
              >
                <iframe
                  src={`${videoUrl}?autoplay=${hoverVideo === i || activeVideo === i ? 1 : 0}&mute=1`}
                  title={`Event video ${i}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {activeImage && (
          <div
            className="fullscreen-overlay d-flex justify-content-center align-items-center animate__animated animate__fadeInDown"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 2000
            }}
          >
            <button
              className="btn btn-light position-absolute top-0 end-0 m-3"
              onClick={() => setActiveImage(null)}
              style={{ zIndex: 2100 }}
            >
              ✕
            </button>
            <img
              src={activeImage}
              alt="Full View"
              className="img-fluid shadow-lg rounded animate__animated animate__zoomIn"
              style={{ maxHeight: '90vh', maxWidth: '90vw' }}
            />
          </div>
        )}

        {activeVideo !== null && (
          <div
            className="fullscreen-overlay d-flex justify-content-center align-items-center animate__animated animate__fadeInDown"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 2000
            }}
          >
            <button
              className="btn btn-light position-absolute top-0 end-0 m-3"
              onClick={() => setActiveVideo(null)}
              style={{ zIndex: 2100 }}
            >
              ✕
            </button>
            <div className="ratio ratio-16x9 w-75 h-75 animate__animated animate__zoomIn">
              <iframe
                src={`${dummyVideos[activeVideo]}?autoplay=1&mute=0`}
                title={`Fullscreen video ${activeVideo}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Gallery;