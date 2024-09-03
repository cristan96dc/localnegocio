import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Quotes from './components/Quotes/Quotes';
import Footer from './components/Footer/Footer';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import ProductGallery from './components/ProductGallery/ProductGallery';
// import AllProducts from './components/AllProducts';
import AllProducts from './components/AllProducts/AllProducts';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
        <Quotes />
        <PhotoGallery />
      
        <ProductGallery />
        <AllProducts />

      <Footer />
    </div>
  );
}

export default App;