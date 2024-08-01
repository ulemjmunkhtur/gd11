import React from 'react';
import logo from '../images/gd11-logo.png'; // Adjust the path based on your project structure
import heroImage from '../images/gd11premium.png'; // Adjust the path based on your project structure

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2">
          <img src={logo} alt="GD11 Logo" className="h-12 mb-4" />
          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
            The skin self-renewal power <br /> that turns time back
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            Become an age creator with GD11 products
          </p>
          <a
            href="#"
            className="inline-block bg-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
          >
            See Products
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={heroImage} alt="GD11 Products" className="w-full max-w-sm md:max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
