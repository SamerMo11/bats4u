import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import './App.css';
// import './Responsive/nav.css';
import Nav from "./Layout/Nav";
import Home from "./Layout/Home";
import Shop from "./Layout/Shop";
import About from "./Layout/About";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0);
  };

  return(
    <Router>
    <Nav cartItems={cartItems} removeFromCart={removeFromCart} getTotalPrice={getTotalPrice}  />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Shop" element={<Shop addToCart={addToCart} />} />
    <Route path="/About" element={<About />} />
    </Routes>

  </Router>
  )
}

export default App;
