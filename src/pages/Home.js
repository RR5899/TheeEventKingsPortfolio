// // Home.js
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import MainLayout from '../layouts/MainLayout';
// import HomeCarousel from '../components/Home/HomeCarousel';
// import Section from '../components/Home/Section';
// import '../styles/custom.css';

// const sections = [
//   {
//     title: 'Wedding Planning',
//     description: 'From lavish venues to delicate floral arrangements, we craft unforgettable weddings.',
//     imgSrc: 'seven.jpeg',
//   },
//   {
//     title: 'Haldi Decorations',
//     description: 'We bring joy to haldi with colorful themes and dazzling setups.',
//     imgSrc: 'three.jpeg',
//     reverse: true,
//   },
//   {
//     title: 'Corporate Events',
//     description: 'From launch parties to annual celebrations, we deliver corporate class with flair.',
//     imgSrc: 'Courosol3.webp',
//   },
// ];

// const videos = [
//   'https://www.youtube.com/embed/L8WV3T-tQ5Q',
//   'https://www.youtube.com/embed/tHckmMuhVAs'
// ];

// const Home = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200, once: true });
//   }, []);

//   return (
//     <MainLayout>
//       <HomeCarousel />

//       <div className="container my-5">
//         <h2 className="text-center text-gold elegant-font fw-bold mb-5" data-aos="fade-up">What We Do</h2>
//         {sections.map((section, index) => (
//           <Section key={index} {...section} data-aos-delay={index * 200} />
//         ))}

//         <h3 className="text-center text-gold elegant-font fw-bold my-5" data-aos="fade-up">Watch Our Moments</h3>
//         <div className="row g-4 justify-content-center">
//           {videos.map((url, idx) => (
//             <div className="col-md-6" key={idx} data-aos="zoom-in" data-aos-delay={idx * 150}>
//               <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
//                 <iframe
//                   src={`${url}?autoplay=0&mute=1`}
//                   title={`video-${idx}`}
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonials Section */}
//         <div className="container my-5">
//           <h3 className="text-center text-gold elegant-font fw-bold mb-4" data-aos="fade-up">What Our Clients Say</h3>
//           <div className="row g-4 justify-content-center">
//             {[
//               {
//                 name: 'Anjali Sharma',
//                 role: 'Bride',
//                 feedback: 'The Event Kimg turned my wedding into a dream come true! Every detail was magical.',
//                 image: 'https://randomuser.me/api/portraits/women/1.jpg'
//               },
//               {
//                 name: 'Rahul Mehta',
//                 role: 'Corporate Client',
//                 feedback: 'Professional and elegant. Our annual gala was a huge success thanks to their planning.',
//                 image: 'https://randomuser.me/api/portraits/men/2.jpg'
//               },
//               {
//                 name: 'Priya Desai',
//                 role: 'Birthday Host',
//                 feedback: 'My daughter’s birthday was vibrant and full of joy. The decoration was fabulous!',
//                 image: 'https://randomuser.me/api/portraits/women/3.jpg'
//               },
//               {
//                 name: 'Arjun Kapoor',
//                 role: 'Photographer',
//                 feedback: 'I’ve worked with many planners, but Aurora stands out for coordination and elegance.',
//                 image: 'https://randomuser.me/api/portraits/men/4.jpg'
//               }
//             ].map((testimonial, index) => (
//               <div className="col-md-6 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
//                 <div className="card h-100 shadow-sm border-0 rounded p-3 text-center">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="rounded-circle mb-3 mx-auto"
//                     style={{ width: '80px', height: '80px', objectFit: 'cover' }}
//                   />
//                   <h5 className="text-gold elegant-font fw-bold">{testimonial.name}</h5>
//                   <small className="text-muted">{testimonial.role}</small>
//                   <p className="mt-2 text-dark fs-6">"{testimonial.feedback}"</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </MainLayout>
//   );
// };

// export default Home;


// Home.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from '../layouts/MainLayout';
import HomeCarousel from '../components/Home/HomeCarousel';
import Section from '../components/Home/Section';
import '../styles/custom.css';
import 'animate.css';

const sections = [
  {
    title: 'Wedding Planning',
    description: 'From lavish venues to delicate floral arrangements, we craft unforgettable weddings.',
    imgSrc: 'seven.jpeg',
  },
  {
    title: 'Haldi Decorations',
    description: 'We bring joy to haldi with colorful themes and dazzling setups.',
    imgSrc: 'three.jpeg',
    reverse: true,
  },
  {
    title: 'Corporate Events',
    description: 'From launch parties to annual celebrations, we deliver corporate class with flair.',
    imgSrc: 'Courosol3.webp',
  },
];

const videos = [
  'https://www.youtube.com/embed/L8WV3T-tQ5Q',
  'https://www.youtube.com/embed/tHckmMuhVAs'
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <MainLayout>
      <HomeCarousel />

      <div className="container my-5">
        <h2 className="text-center text-gold elegant-font fw-bold mb-5" data-aos="fade-up">
          What We Do
        </h2>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`row align-items-center mb-5 ${section.reverse ? 'flex-row-reverse' : ''}`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="overflow-hidden rounded shadow zoom-wrapper">
                <img
                  src={section.imgSrc}
                  alt={section.title}
                  className="img-fluid zoom-on-hover"
                />
              </div>
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h3 className="text-gold elegant-font fw-bold mb-3">{section.title}</h3>
              <p className="text-muted fs-5">{section.description}</p>
            </div>
          </div>
        ))}

        <h3 className="text-center text-gold elegant-font fw-bold my-5" data-aos="fade-up">
          Watch Our Moments
        </h3>
        <div className="row g-4 justify-content-center">
          {videos.map((url, idx) => (
            <div className="col-md-6" key={idx} data-aos="zoom-in" data-aos-delay={idx * 150}>
              <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                <iframe
                  src={`${url}?autoplay=0&mute=1`}
                  title={`video-${idx}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="container my-5">
          <h3 className="text-center text-gold elegant-font fw-bold mb-4" data-aos="fade-up">
            What Our Clients Say
          </h3>
          <div className="row g-4 justify-content-center">
            {[
              {
                name: 'Anjali Sharma',
                role: 'Bride',
                feedback: 'The Event King turned my wedding into a dream come true! Every detail was magical.',
                image: 'https://randomuser.me/api/portraits/women/1.jpg'
              },
              {
                name: 'Rahul Mehta',
                role: 'Corporate Client',
                feedback: 'Professional and elegant. Our annual gala was a huge success thanks to their planning.',
                image: 'https://randomuser.me/api/portraits/men/2.jpg'
              },
              {
                name: 'Priya Desai',
                role: 'Birthday Host',
                feedback: 'My daughter’s birthday was vibrant and full of joy. The decoration was fabulous!',
                image: 'https://randomuser.me/api/portraits/women/3.jpg'
              },
              {
                name: 'Arjun Kapoor',
                role: 'Photographer',
                feedback: 'I’ve worked with many planners, but The Event King stands out for coordination and elegance.',
                image: 'https://randomuser.me/api/portraits/men/4.jpg'
              }
            ].map((testimonial, index) => (
              <div
                className="col-md-6 col-lg-3"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card h-100 shadow-sm border-0 rounded p-3 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-3 mx-auto"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h5 className="text-gold elegant-font fw-bold">{testimonial.name}</h5>
                  <small className="text-muted">{testimonial.role}</small>
                  <p className="mt-2 text-dark fs-6">"{testimonial.feedback}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Home;
