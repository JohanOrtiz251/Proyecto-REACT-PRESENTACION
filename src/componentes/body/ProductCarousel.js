import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = ({ recommendedProducts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Productos Recomendados</h2>
      <Slider {...settings}>
        {recommendedProducts.map(product => (
          <div key={product.id} className="px-2">
            <img className="w-full rounded-lg mb-2" src={product.image} alt={product.title} />
            <p className="text-gray-800 dark:text-white font-bold">{product.title}</p>
            <p className="text-gray-600 dark:text-gray-300">{product.precio}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
