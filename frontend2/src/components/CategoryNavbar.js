import React from 'react';

const CategoryNavbar = ({ activeCategory, setActiveCategory, categories }) => {
  return (
    <div className="flex justify-center mb-8 space-x-8 bg-white shadow-md py-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`text-lg font-semibold ${activeCategory === category ? 'text-black underline' : 'text-gray-500'}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNavbar;
