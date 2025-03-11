import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Loginpopup from './component/LogInpopup/Loginpopup'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [showLogin,setShowLogin] =useState(false)
  return (
    <>
    {showLogin? <Loginpopup/>:<></>}
    <div className="app">
    {/* Navbar */}
    <Navbar setShowLogin ={setShowLogin}/>

    {/* Main Routes */}
    <div className="app-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>

    {/* Footer */}
    
  </div>
  <Footer />
  </>
  );
};

export default App;
