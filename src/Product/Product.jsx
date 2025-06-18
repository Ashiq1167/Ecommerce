import React from 'react';
import { Star, Heart } from 'lucide-react'; 

const ProductCard = ({ product }) => {
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
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
      <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors duration-200 z-10">
        <Heart className={product.isFavorite ? 'fill-red-500 text-red-500' : ''} size={24} />
      </button>

      <div className="w-full flex items-center justify-center p-4 bg-gray-100">
        <img src={product.imageSrc} alt={product.name} className="max-h-full max-w-full object-contain" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.brand} {product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.name}</p>

        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        <p className="text-xl font-bold text-white">
          ${product.price} <span className="text-sm font-normal text-gray-500">{product.currency}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;