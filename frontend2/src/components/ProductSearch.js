
import productImage1 from '../images/product1.png'; // Adjust the path based on your project structure
import productImage2 from '../images/product2.png'; // Adjust the path based on your project structure
import productImage3 from '../images/product3.png'; // Adjust the path based on your project structure
import productImage4 from '../images/product4.jpeg'; // Adjust the path based on your project structure
import headerImage from '../images/headerimage.jpg'; // Add the header image
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryNavbar from '../components/CategoryNavbar';

const ProductSearch = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const products = [
    {
      image: productImage1,
      type: 'PREMIUM RX',
      name: 'CELL TREATMENT PROGRAM 1+',
    },
    {
      image: productImage2,
      type: 'PREMIUM RX',
      name: 'CELL TREATMENT PROGRAM 3+',
    },
    {
      image: productImage3,
      type: 'PREMIUM RX',
      name: 'CELL TREATMENT MASK',
    },
    {
      image: productImage4,
      type: 'PREMIUM RX',
      name: 'REVITALIZING EYE CREAM',
    },
    // Add more products as needed
  ];

  const categories = ['ALL', 'PREMIUM RX', 'ADVANCED LAB ENERGY', 'CELL FACTORY', 'ESTHÉ RX'];

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header Image */}
      <div className="mb-4">
        <img src={headerImage} alt="Header" className="w-full h-40 object-cover" />
      </div>

      {/* Categories Navbar */}
      <CategoryNavbar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        categories={categories} 
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products
          .filter((product) => activeCategory === 'ALL' || product.type === activeCategory)
          .map((product) => (
            <ProductCard key={product.name} image={product.image} type={product.type} name={product.name} />
          ))}
      </div>
    </div>
  );
};

export default ProductSearch;
