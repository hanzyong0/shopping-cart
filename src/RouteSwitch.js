import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Card from './components/Card';
import Cart from './components/Cart';
import Home from './components/Home';
import Item from './components/Item';
import Shop from './components/Shop';

function RouteSwitch() {
  const [cart, setCart] = useState([]);

  const handleChange = (e) => {
    const itemExists = cart.find((item) => item.name === e.target.name);
    let num = parseInt(e.target.value, 10);
    let newNum = (isNaN(num) ? 0 : num);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.name === e.target.name
            ? { ...item, quantity: newNum }
            : item
        )
      )
    } else {
      setCart([
        ...cart, { name: e.target.name, quantity: newNum }]);
    }
    console.log(cart);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop cart={cart} setCart={setCart} handleChange={handleChange} />} />
          <Route path="shop/:itemId" element={<Card cart={cart} setCart={setCart} handleChange={handleChange} />} />
          <Route path="shop/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
