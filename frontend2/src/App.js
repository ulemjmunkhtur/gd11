import React from 'react';
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar/>
     <ProductPage />
     <Footer/>

    </div>
  );
};

export default App;
