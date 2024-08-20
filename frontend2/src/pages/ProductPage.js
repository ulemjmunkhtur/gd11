import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { FaPlus, FaMinus } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProductPage.css';
import { getProductById } from '../services/productService'; // Import the API function

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Get the product ID from the URL params

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-16">
      {/* ... */}
      <div className="md:w-2/3 mt-8 md:mt-0">
        <h1 className="text-sm font-semibold text-gray-600 mb-1">{product.category}</h1>
        <h2 className="text-3xl font-bold mb-2">{product.Name}</h2>

        <div className="mb-1">
          <p className="font-semibold">Volume</p>
          <p className="mb-1">{product.volume}</p>
          <p className="font-semibold">Function</p>
          <p className="mb-1">{product.function}</p>
          <p className="font-semibold">Skin Benefits</p>
          <p>{product.skinbenefits}</p>
        </div>

        {/* ... */}

        <div className="mb-2">
          <h3 className="font-semibold text-lg mb-1">Characteristics</h3>
          <p className="leading-relaxed text-gray-600">{product.characteristics}</p>
        </div>

        {/* ... */}

        <div className="mb-2">
          <h3 className="font-semibold text-lg mb-1">How to use</h3>
          <p className="leading-relaxed text-gray-600">{product.howtouse}</p>
        </div>

        {/* ... */}
      </div>
    </div>
  );
};

export default ProductPage;