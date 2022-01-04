import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Card from './components/Card';
import Cart from './components/Cart';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Shop from './components/Shop';
import { getItemByName } from './data';

function RouteSwitch() {
  // Cart State
  const [cart, setCart] = useState([]);

  // Add to cart everytime card quantity input is changed
  const handleChange = (e) => {
    const itemByName = getItemByName(e.target.name);
    const itemExists = cart.find((item) => item.name === e.target.name);
    let num = parseInt(e.target.value, 10);
    let newNum = (isNaN(num) ? 0 : num);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.name === e.target.name
            ? { ...item, quantity: newNum, ...itemByName }
            : item
        )
      )
    } else {
      setCart([
        ...cart, { name: e.target.name, quantity: newNum, ...itemByName }]);
    }
  }

  // Sums of cart items
  const quantitySum = (cart.reduce((previous, current) => previous + parseInt(current.quantity, 10), 0));
  const priceSum = (cart.reduce((previous, current) => previous + (parseInt(current.quantity, 10)
    * parseInt(current.price, 10)), 0));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<App />}>
          <Route path="shop" element={<Shop cart={cart} quantitySum={quantitySum} />} />
          <Route path="shop/:itemId" element={<Card handleChange={handleChange} />} />
          <Route path="shop/cart" element={<Cart cart={cart} quantitySum={quantitySum} priceSum={priceSum} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
