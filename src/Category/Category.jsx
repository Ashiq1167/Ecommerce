import React from 'react';
import cat1 from '../assets/Category/Steering-Wheel.webp'
import cat2 from '../assets/Category/Mouse-Pads.webp';
import cat3 from '../assets/Category/VR-Boxes.webp';
import cat4 from '../assets/Category/Keyboards.webp';
import cat5 from '../assets/Category/Headsets.webp';
import cat6 from '../assets/Category/Game-Pads.webp';
import cat7 from '../assets/Category/Chairs.webp';
import cat8 from '../assets/Category/Gaming-Mice.webp';  

const categories = [
  { key: 'steering', label: 'Steering Wheels', img: cat1 },
  { key: 'mousepad', label: 'Mouse Pads', img: cat2},
  { key: 'vr', label: 'VR Boxes', img: cat3},
  { key: 'keyboard', label: 'Keyboards', img: cat4},
  { key: 'headset', label: 'Headsets', img: cat5},
  { key: 'gamepad', label: 'Game Pads', img: cat6},
  { key: 'chair', label: 'Chairs', img: cat7},
  { key: 'mouse', label: 'Gaming Mice', img: cat8},
];

export default function CategoryGrid({ onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {categories.map((cat) => (
        <div
          key={cat.key}
          className="w-24 text-center cursor-pointer"
          onClick={() => onSelect?.(cat.key)}
        >
          <img
            src={cat.img}
            alt={cat.label}
            className="w-full  rounded-lg mb-2 object-cover"
          />
          <span className="text-sm text-white">{cat.label}</span>
        </div>
      ))}
    </div>
  );
}
