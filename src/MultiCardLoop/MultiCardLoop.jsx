import React from 'react';
import Marquee from 'react-fast-marquee';
import './DualFastMarquee.css';
import pic1 from '../assets/MultiCardLoop/pic1.jpg';
import pic2 from '../assets/MultiCardLoop/pic2.jpg';
import pic3 from '../assets/MultiCardLoop/pic3.jpg'; 
import pic4 from '../assets/MultiCardLoop/pic4.jpg';
import pic5 from '../assets/MultiCardLoop/pic5.jpg';
import pic6 from '../assets/MultiCardLoop/pic6.jpg';
import pic7 from '../assets/MultiCardLoop/pic7.jpg';
import pic8 from '../assets/MultiCardLoop/pic8.jpg';
import pic9 from '../assets/MultiCardLoop/pic9.jpg';
import pic10 from '../assets/MultiCardLoop/pic10.jpg';  
import pic11 from '../assets/MultiCardLoop/pic11.jpg';
import pic12 from '../assets/MultiCardLoop/pic12.jpg';
import pic13 from '../assets/MultiCardLoop/pic13.jpg';
import pic14 from '../assets/MultiCardLoop/pic14.jpg';
import pic15 from '../assets/MultiCardLoop/pic15.jpg';
import pic16 from '../assets/MultiCardLoop/pic16.jpg';
import pic17 from '../assets/MultiCardLoop/pic17.jpg';
import pic18 from '../assets/MultiCardLoop/pic18.png';
import pic19 from '../assets/MultiCardLoop/pic19.jpg';
import pic20 from '../assets/MultiCardLoop/pic20.jpg';


const images = [
  pic1, pic2, pic3,pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20];

export default function DualFastMarquee({
  speed = 40,
  pauseOnHover = true,
  spacing = 3,
  imgWidth = 180,
  trackGap = 24
}) {
  return (
    <div className="dual-fast-marquee">
      <Marquee
        gradient={true}
        gradientColor="#111"
        gradientWidth={spacing * 2}
        speed={speed}
        pauseOnHover={pauseOnHover}
        direction="left"
        autoFill={true}
        loop={0}
      >
        {images.map((src, i) => (
          <img
            key={`f-${i}`}
            src={src}
            alt={`Scene ${i + 1}`}
            className="marquee-img"
            style={{ margin: `0 ${spacing}px`, width: `${imgWidth}px` }}
          />
        ))}
      </Marquee>

      <div style={{ height: `${trackGap}px` }} />

      <Marquee
        gradient={true}
        gradientColor="#111"
        gradientWidth={spacing * 2}
        speed={speed}
        pauseOnHover={pauseOnHover}
        direction="right"
        autoFill={true}
        loop={0}
      >
        {images.slice().reverse().map((src, i) => (
          <img
            key={`r-${i}`}
            src={src}
            alt={`Scene ${images.length - i}`}
            className="marquee-img"
            style={{ margin: `0 ${spacing}px`, width: `${imgWidth}px` }}
          />
        ))}
      </Marquee>
    </div>
  )
}
