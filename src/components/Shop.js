import React from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../data';

function Shop({ cart, quantitySum }) {
  const items = getItems();

  return (
    <div className='shop'>
      <div>
        <Link
          to="/shop/cart"
          state={cart}
          className='cart-link'
        >
          Cart ({quantitySum})
        </Link>
      </div>
      <div className='cards'>
        {items.map(
          (item) => (
            < Link
              key={item.id}
              to={`/shop/${item.id}`}
            >
              <img src={item.img} alt={item.name}></img>
              <p>{item.name}</p>
            </Link>
          )
        )}
      </div>
    </div >
  )
}

export default Shop
