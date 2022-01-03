import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../data';
import Item from './Item';

function Shop() {
  const items = getItems();
  const [cart, setCart] = useState([]);

  const handleChange = (e) => {
    const itemExists = cart.find((item) => item.name === e.target.name);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.name === e.target.name
            ? { ...item, quantity: e.target.value }
            : item
        )
      )
    } else {
      setCart([
        ...cart, { name: e.target.name, quantity: e.target.value }]);
    }
  }

  const sum = cart.reduce((previous, current) => previous + parseInt(current.quantity, 10), 0)

  return (
    <div className='shop'>
      <div className='cart'>
        <Link
          to="/shop/cart"
        >
          Cart ({sum})
        </Link>
      </div>
      <div className='items'>
        {items.map(
          (item) => (
            < Item
              key={item.id}
              name={item.name}
              handleChange={handleChange}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Shop
