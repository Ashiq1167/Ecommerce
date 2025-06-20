import React from 'react';
import Choice1 from '../assets/BestProduct/Chair.png'
import Choice2 from '../assets/BestProduct/Game.png'
import Choice3 from'../assets/BestProduct/Headset.png'
import Choice4 from '../assets/BestProduct/keyboard.png'
import Choice5 from '../assets/BestProduct/mouse.png'
import Choice6 from '../assets/BestProduct/mouse1.png'
import Choice7 from '../assets/BestProduct/stand.png'


 const BestChoiceProducts = [

  {
    id: 'bc002',
    name: "GTA V Game",
    imageSrc: Choice2, 
    price: 100000,
    rating: 5,
    reviews: 2,
  },
  {
    id: 'bc003',
    name: "Headset stand",
    imageSrc: Choice7, 
    price: 216,
    rating: 4,
    reviews: 1,
  },
  {
    id: 'bc004',
    name: "Computer chair",
    imageSrc: Choice1, 
    price: 350,
    rating: 3,
    reviews: 2,
  },
  {
    id: 'bc005',
    name: "Gaming mouse Q280",
    imageSrc: Choice5 , 
    price: 210,
    rating: 5,
    reviews: 1,
  },
 
  {
    id: 'bc007',
    name: "Split keyboard",
    imageSrc: Choice4,
    price: 178,
    rating: 4,
    reviews: 1,
  },
  
  {
    id: 'bc009',
    name: "Gaming headset",
    imageSrc: Choice3 , 
    price: 159,
    rating: 5,
    reviews: 3,
  },

  
];

export default BestChoiceProducts;