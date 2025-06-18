import React from 'react';
import Product from 'react-fast-Product';
import pro1 from '../assets/jbll.webp';
import pro2 from '../assets/key.png';
import pro3 from '../assets/mouse.jpg';
import pro4 from '../assets/rog.jpg';
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
        name: "keyboard",
        brand: "ZEBRONICS",
        imageSrc: "/assets/products/key.png",
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
        imageSrc: "/assets/products/mouse.jpg",
        rating: 5,
        reviews: 1,
        price: 127,
        currency: "USD",
        isFavorite: false,
    },
    {
        id: 'prod004',
        name: "Gaming headset",
        brand: "ASUS",
        imageSrc: "/assets/products/rog.jpg",
        rating: 5,
        reviews: 3,
        price: 159,
        currency: "USD",
        isFavorite: false,
    },
];