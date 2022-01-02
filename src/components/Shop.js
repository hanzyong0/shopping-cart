import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getItems } from '../data';

function Shop() {
  const items = getItems();
  return (
    <div className='shop'>
      <div className='cart'>
        <Link
          to="/shop/cart"
        >
          Cart
        </Link>
      </div>
      <div className='items'>
        {items.map(
          (item) => (
            <Link
              to={`/shop/${item.id}`}
              key={item.id}
              className='item'
            >
              {item.name}
            </Link>
          )
        )}
        <Outlet />
      </div>
    </div>
  )
}

export default Shop
