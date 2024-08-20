import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryNavbar from '../components/CategoryNavbar';
import headerImage from '../images/headerimage.jpg';
import { getProductsByCategoryName } from '../services/productService';

const ProductSearch = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let fetchedProducts;
        if (activeCategory === 'ALL') {
          fetchedProducts = await getProductsByCategoryName('');
        } else {
          console.log(activeCategory);
          fetchedProducts = await getProductsByCategoryName(activeCategory);
        }
        setProducts(Array.isArray(fetchedProducts) ? fetchedProducts : []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, [activeCategory]);

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
        {Array.isArray(products) && products.map((product) => (
          <ProductCard
            key={product.ProductID}
            image={product.image}
            type={product.category}
            name={product.Name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;