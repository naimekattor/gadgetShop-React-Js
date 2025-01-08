import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Navbar from './component/Navbar';
import Footer from './pages/Footer';

const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;