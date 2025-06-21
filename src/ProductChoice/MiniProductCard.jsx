
import React from 'react';
import { Star } from 'lucide-react'; 

const MiniProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-200 cursor-pointer rounded-lg">
    
      <div className="w-16 h-16 mr-4 flex-shrink-0 bg-gray-600 rounded-md flex items-center justify-center overflow-hidden">
        <img src={product.imageSrc} alt={product.name} className="max-w-full max-h-full object-contain" />
      </div>

      
      <div className="flex-grow">
        <h3 className="text-white text-md font-semibold mb-1 truncate">{product.name}</h3>
        <div className="flex items-center mb-1">
          <div className="flex mr-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-gray-400 text-xs">({product.reviews})</span>
        </div>
        <p className="text-red-700 text-lg font-bold">
          ${product.price}
          {product.originalPrice && (
            <span className="text-gray-500 text-sm line-through ml-2">${product.originalPrice}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default MiniProductCard;