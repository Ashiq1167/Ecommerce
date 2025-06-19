import React from 'react'

import { SpeakerIcon } from 'lucide-react';
import { MyMarqueeComponent } from '../Marquee/Marquee';
import Marquee from 'react-fast-marquee';

export const MarqueeComponent = () => {
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
         "ஆஃபர் இல்ல, கிளம்பு" &nbsp;&nbsp;&nbsp;&nbsp;"ஆஃபர் இல்ல, கிளம்பு" &nbsp;&nbsp;&nbsp;&nbsp;"ஆஃபர் இல்ல, கிளம்பு" &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </Marquee>
    </div>
  );
};