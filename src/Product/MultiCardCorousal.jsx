import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid'; 


import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';


import ProductCard from './Product'; 


import pro1 from '../assets/jbll.webp';
import pro2 from '../assets/key.png';
import pro3 from '../assets/mouse.png';
import pro4 from '../assets/rog.png';


const products = [
    {
        id: 'prod001',
        name: "Portable speaker",
        brand: "JBL",
        imageSrc: pro1,
        rating: 3,
        reviews: 3,
        price: 118,
        currency: "USD",
        isFavorite: false,
    },
    {
        id: 'prod002',
        name: "Gaming keyboard",
        brand: "ZEBRONICS",
        imageSrc: pro2,
        rating: 3,
        reviews: 1,
        price: 178,
        currency: "USD",
        isFavorite: false,
    },
    {
        id: 'prod003',
        name: "Gaming mouse XS320",
        brand: "LOGITECH",
        imageSrc: pro3,
        rating: 5,
        reviews: 1,
        price: 127,
        currency: "USD",
        isFavorite: false,
    },
    {
        id: 'prod004',
        name: "Gaming headset",
        brand: "ROG",
        imageSrc: pro4,
        rating: 5,
        reviews: 3,
        price: 159,
        currency: "USD",
        isFavorite: false,
    },
   
];


const MultiCardCarousel = () => {
  return (
    <section className="py-12 bg-gray-900 text-white"> 
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Products</h2>

        <Swiper
      
          slidesPerView={1}
          spaceBetween={20}
          navigation={true} 
          pagination={{ clickable: true }} 
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true} 
          modules={[Navigation, Pagination, Autoplay, Grid]} 
          className="mySwiper-multicard" 
          breakpoints={{
         
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
         
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
           
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
           
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MultiCardCarousel;