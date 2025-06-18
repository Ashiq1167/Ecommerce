import React from 'react';
import { ArrowRight } from 'lucide-react';
import Card1 from '../assets/Card/Games.webp';
import Card2 from '../assets/Card/Headsets.webp';
import Card3 from '../assets/Card/New-Mice.webp';
import Card4 from '../assets/Card/VR-Boxes.webp';

const banners = [
  {
    key: 'headsets',
    title: 'HEADSETS',
    subtitle: 'Experience Sound Like Never Before',
    img: Card2,
    bgClass: 'bg-gray-800',
    textColor: 'text-white',
    btnLight: true
  },
  {
    key: 'newMice',
    title: 'NEW MICE',
    subtitle: 'Unleash Your Gaming Potential',
    img: Card3,
    bgClass: 'bg-blue-500',
    textColor: 'text-white',
    btnLight: true
  },
  {
    key: 'vrBoxes',
    title: 'VR BOXES',
    subtitle: 'Step into Virtual Reality',
    img: Card4,
    bgClass: 'bg-gray-100',
    textColor: 'text-gray-900',
    btnLight: false
  },
  {
    key: 'games',
    title: 'GAMES',
    subtitle: 'Immerse Yourself in Adventures',
    img: Card1,
    bgClass: 'bg-gray-900',
    textColor: 'text-white',
    btnLight: true
  }
];

export default function BannerSection() {
  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {banners.map(({ key, title, subtitle, img, bgClass, textColor, btnLight }) => (
          <div
            key={key}
            className={`${bgClass} rounded-lg overflow-hidden relative flex items-center transition-transform transform hover:scale-[1.02] hover:shadow-lg`}
            style={{ minHeight: '240px' }}
          >
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="absolute right-0 bottom-0 h-full object-cover opacity-80"
            />
            <div className="p-6 max-w-xs">
              <h2 className={`text-xl font-bold uppercase mb-2 ${textColor}`}>{title}</h2>
              <p className={`mb-4 ${textColor}`}>{subtitle}</p>
              <button
                className={`inline-flex items-center px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  btnLight
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                Shop Now
                <ArrowRight size={16} className={`ml-2 ${btnLight ? 'text-gray-900' : 'text-white'}`} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
