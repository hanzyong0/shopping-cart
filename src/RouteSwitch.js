import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Card from './components/Card';
import Cart from './components/Cart';
import Home from './components/Home';
import Item from './components/Item';
import Shop from './components/Shop';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:itemId" element={<Card />} />
          <Route path="shop/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
