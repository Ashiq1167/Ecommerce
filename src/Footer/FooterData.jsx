import React from 'react';
import FooterData from "./Footer";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';


const Footer = () => {

  const getIconComponent = (iconName, size = 20) => {
    switch (iconName) {
      case 'facebook': return <Facebook size={size} />;
      case 'instagram': return <Instagram size={size} />;
      case 'youtube': return <Youtube size={size} />;
      case 'phone': return <Phone size={18} className="mr-2" />;
      case 'mail': return <Mail size={18} className="mr-2" />;
      case 'map-pin': return <MapPin size={18} className="mr-2" />;
      default: return null;
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div className="flex flex-col items-start">
          <h3 className="text-3xl font-bold text-white mb-4">{FooterData.brand.name}</h3>
          <p className="text-sm mb-6">{FooterData.brand.description}</p>
          <div className="flex space-x-4">
            {FooterData.socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-400 hover:text-white transition-colors duration-200">
                {getIconComponent(link.icon)}
              </a>
            ))}
          </div>
        </div>
        {FooterData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h4 className="text-xl font-semibold text-white mb-4">{section.title}</h4>
            {section.links && (
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className="hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {section.details && (
              <ul className="space-y-3">
                {section.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start text-sm">
                    {getIconComponent(detail.icon)}
                    <span className="flex-1">{detail.value}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>


      <hr className="border-gray-700 mb-6" />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p className="mb-4 md:mb-0 text-center md:text-left">{FooterData.copyright}</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-3">
          {FooterData.paymentMethods.map((method, index) => (
            <img
              key={index}
              src={method.imageSrc}
              alt={method.name}
              className="h-6 w-auto object-contain"
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-indigo-600 p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200 z-50"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer; 