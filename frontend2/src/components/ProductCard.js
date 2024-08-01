import React from 'react';

const ProductCard = ({ image, type, name }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <img src={image} alt={name} className="mb-4 w-48 h-48 object-cover" />
      <p className="text-sm font-semibold text-gray-500 mb-1">{type}</p>
      <p className="text-lg font-bold">{name}</p>
    </div>
  );
};

export default ProductCard;
