import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">The skin self-renewal power</span>
            <span className="block text-indigo-600">that turns time back</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Become an age creator with GD11 products
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#see-products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                See Products
              </a>
            </div>
          </div>
        </div>
      </main>

      <section className="mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <img src="product-image-url" alt="Product" className="h-40 w-full object-cover" />
          <h3 className="mt-4 text-lg font-semibold text-gray-900">GD11 Premium Product</h3>
        </div>
        {/* Repeat similar blocks for other products */}
      </section>
    </div>
  );
};

export default HomePage;
