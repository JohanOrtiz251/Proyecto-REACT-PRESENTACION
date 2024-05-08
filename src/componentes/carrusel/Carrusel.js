import React, { useState, useEffect } from 'react';
import './carrusel.css'; // Archivo CSS para estilos
import PocoX5_1 from './PocoX5-1.jpg';
import PocoX5 from './PocoX5.jpg';

const Carrusel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [PocoX5_1, PocoX5];

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, );

  return (
    <div className="carousel-container relative w-full max-w-5xl mx-auto">
      <button className="prev-button absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black text-opacity-50 hover:text-opacity-100 hover:bg-opacity-100 rounded-full p-2 focus:outline-none" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <img src={images[currentImageIndex]} alt="Product" className="carousel-image w-full h-auto" />
      <button className="next-button absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black text-opacity-50 hover:text-opacity-100 hover:bg-opacity-100 rounded-full p-2 focus:outline-none" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carrusel;
