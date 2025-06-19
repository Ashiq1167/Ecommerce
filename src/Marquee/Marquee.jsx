import React from 'react';
import Marquee from 'react-fast-marquee';
import { SpeakerIcon } from 'lucide-react';

export const MyMarqueeComponent = () => {
  return (
    <div className="bg-gray-800 py-2"> 
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={false}
        direction="left"
      >
        <div className="flex items-center text-5xl text-white px-5 font-bold"> 
          <SpeakerIcon className="mr-3" size={32} /> 
          NO CHANCE FOR DISCOUNT &nbsp;&nbsp;&nbsp;&nbsp;NO CHANCE FOR DISCOUNT &nbsp;&nbsp;&nbsp;&nbsp;NO CHANCE FOR DISCOUNT &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </Marquee>
    </div>
  );
};