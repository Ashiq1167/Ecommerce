import React from 'react';
import cat1 from '../assets/Steering-Wheel.webp';
import car2 from '../assets/Mouse-Pads.webp';
import car3 from '../assets/VR-Boxes.webp';
import car4 from '../assets/Keyboards.webp';
import car5 from '../assets/Headsets.webp';
import car6 from '../assets/Game-Pads.webp';
import car7 from '../assets/Chairs.webp';
import car8 from '../assets/Gaming-Mice.webp';

const categories = [
  { key: 'steering', label: 'Steering Wheels', img: cat1 },
  { key: 'mousepad', label: 'Mouse Pads', img: car2 },
  { key: 'vr', label: 'VR Boxes', img: car3 },
  { key: 'keyboard', label: 'Keyboards', img: car4 },
  { key: 'headset', label: 'Headsets', img: car5 },
  { key: 'gamepad', label: 'Game Pads', img: car6 },
  { key: 'chair', label: 'Chairs', img: car7 },
  { key: 'mouse', label: 'Gaming Mice', img: car8 },
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
