// src/components/Home/HomeCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/custom.css'; // Make sure to define .carousel-image-fit in this file

const HomeCarousel = () => {
  const carouselItems = [
    {
      src: 'one1.jpeg',
      title: 'Celebrate in Style',
      caption: 'Creating unforgettable memories for weddings and special events.'
    },
    {
      src: 'two.jpeg',
      title: 'Our Team',
      caption: 'Best in Mandla for any type of event.'
    },
    {
      src: 'eleven.jpeg',
      title: 'Elegant Corporate Events',
      caption: 'Professional event planning tailored for business excellence.'
    }
  ];

  return (
    <Carousel fade controls indicators>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-image-fit"
            src={item.src}
            alt={`Slide ${index}`}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded-3">
            <h3 className="text-gold elegant-font">{item.title}</h3>
            <p className="text-light">{item.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
