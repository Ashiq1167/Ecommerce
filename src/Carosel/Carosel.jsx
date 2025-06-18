import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 


import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import car1 from '../assets/carosel/image.png';
import car2 from '../assets/carosel/slide2_4deaf18b-2051-4b91-b6bf-f44cbfd2a23b.webp';
import car3 from '../assets/carosel/slide3.webp';

const productData = [
  {
    name: "Game Pad StealthPro X1",
    imageSrc: car1,
    features: [
      "Wireless Connectivity",
      "Ergonomic Design",
      "Precision Control",
      "Customizable Back Buttons",
      "Integrated Rechargeable Battery"
    ],
    ctaText: "SHOP NOW",
    ctaLink: "/shop/stealthpro-x1"
  },
  {
    name: "Gaming Mouse HyperStrike M7",
    imageSrc: car2,
    features: [
      "High-Precision Sensor",
      "Customizable RGB Lighting",
      "Ergonomic Design",
      "Programmable Buttons",
      "On-the-Fly Profile Switching"
    ],
    ctaText: "SHOP NOW",
    ctaLink: "/shop/stealthpro-x1"
  },
  {
    name: "Headset SonicWave Pro X7",
    imageSrc: car3,
    features: [
      "Crystal-Clear Microphone",
      "Immersive 7.1 Surround Sound",
      "Comfortable Design",
      "Customizable Lighting",
      "Durable Build"
    ],
    ctaText: "SHOP NOW",
    ctaLink: "/shop/stealthpro-x1"
  }
];

const Carosel = () => {
  return (
    <div className="relative w-full h-[600px] bg-gray-900 overflow-hidden">
      <Swiper
        spaceBetween={0} 
        slidesPerView={1} 
        navigation={true} 
        pagination={{ clickable: true }} 
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false, 
        }}
        loop={true} 
        modules={[Navigation, Pagination, Autoplay]} 
        className="mySwiper w-full h-full"
      >
        {productData.map((product, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
            
              <img
                src={product.imageSrc}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover opacity-30" 
              />

              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-around px-8 py-12 text-white bg-black bg-opacity-50">
                <div className="flex-1 max-w-lg text-left mb-8 md:mb-0">
                  <h2 className="text-5xl md:text-6xl font-bold mb-4">
                    {product.name.split(' ')[0]} 
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-semibold mb-6 text-indigo-400">
                    {product.name.substring(product.name.indexOf(' ') + 1)}
                  </h3>
                  <ul className="list-disc list-inside text-lg md:text-xl space-y-2 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300">
                    {product.ctaText}
                  </button>
                </div>

              
                <div className="flex-1 flex justify-center items-center max-w-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="max-h-[400px] md:max-h-[500px] w-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carosel;