import React from 'react';
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import ProductSearch from './components/ProductSearch'
import ProductPage from './components/ProductSearch'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar/>
     <ProductSearch/>
     <Footer/>

    </div>
  );
};

export default App;
