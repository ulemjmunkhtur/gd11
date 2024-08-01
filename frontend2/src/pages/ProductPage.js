

import productImage1 from '../images/tonerpads.jpeg'; // Adjust the path based on your project structure
import productImage2 from '../images/tonerpads2.jpg'; // Adjust the path based on your project structure
import productImage3 from '../images/tonerpads3.png'; // Adjust the path based on your project structure
import productImage4 from '../images/tonerpads4.jpeg'; // Adjust the path based on your project structure
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaPlus, FaMinus } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './ProductPage.css'; // Import custom CSS

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="md:flex md:space-x-8">
        {/* Image Carousel */}
        <div className="md:w-1/3 carousel-container">
          <Carousel showThumbs={true} showArrows={true} infiniteLoop={true} verticalSwipe="natural">
            <div>
              <img src={productImage1} alt="Product" />
            </div>
            <div>
              <img src={productImage2} alt="Product" />
            </div>
            <div>
              <img src={productImage3} alt="Product" />
            </div>
            <div>
              <img src={productImage4} alt="Product" />
            </div>
          </Carousel>
        </div>

        {/* Product Details */}
        <div className="md:w-2/3 mt-8 md:mt-0">
          <h1 className="text-sm font-semibold text-gray-600 mb-1">PREMIUM<sup>RX</sup></h1>
          <h2 className="text-3xl font-bold mb-2">CELL TREATMENT PROGRAM 3+</h2>

          <div className="mb-1">
            <p className="font-semibold">Volume</p>
            <p className="mb-1">Cell Treatment 100 mg X 3 ea + Solution 5 ml X 3 ea</p>
            <p className="font-semibold">Function</p>
            <p className="mb-1">Solution : Brightening · Wrinkle reducing</p>
            <p className="font-semibold">Skin Benefits</p>
            <p>Moisturizing · Elasticity · Brightening · Wrinkle reducing</p>
          </div>

          <hr className="border-t-2 border-gray-400 my-2" />

          <div className="mb-2">
            <h3 className="font-semibold text-lg mb-1">Characteristics</h3>
            <p className="leading-relaxed text-gray-600">
              By freeze-drying Human cord blood cell conditioned media to contain the active ingredient intact, 
              it strengthens the efficacy of the product by mixing an elasticity enhancing energy ampoule right before you use it. 
              With premium home clinic care, it helps brighten your skin tone and remove wrinkles, restoring skin elasticity 
              and depth to make your skin high in density.
            </p>
          </div>

          <hr className="border-t-2 border-gray-400 my-2" />

          <div className="mb-2">
            <h3 className="font-semibold text-lg mb-1">How to use</h3>
            <p className="leading-relaxed text-gray-600">
              After opening each vial bottle, add the solution ampoule to the powder vial. 
              Put the enclosed cap vial cone on the mixture vial and gently shake it. 
              Apply an appropriate amount of the mixture onto your skin and spread evenly for absorption.
            </p>
          </div>

          <hr className="border-t-2 border-gray-400 my-2" />

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md overflow-hidden bg-white">
              <button onClick={decreaseQuantity} className="p-2 bg-gray-200 text-gray-700 hover:bg-gray-300"><FaMinus /></button>
              <input type="number" value={quantity} readOnly className="w-12 text-center border-none text-gray-700 bg-white" />
              <button onClick={increaseQuantity} className="p-2 bg-gray-200 text-gray-700 hover:bg-gray-300"><FaPlus /></button>
            </div>
            <button className="bg-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:bg-indigo-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
