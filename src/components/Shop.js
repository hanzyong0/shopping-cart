import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../data';
import Item from './Item';

function Shop({ cart, setCart, handleChange }) {
  const items = getItems();
  // const [cart, setCart] = useState([]);

  // const handleChange = (e) => {
  //   const itemExists = cart.find((item) => item.name === e.target.name);
  //   let num = parseInt(e.target.value, 10);
  //   let newNum = (isNaN(num) ? 0 : num);
  //   if (itemExists) {
  //     setCart(
  //       cart.map((item) =>
  //         item.name === e.target.name
  //           ? { ...item, quantity: newNum }
  //           : item
  //       )
  //     )
  //   } else {
  //     setCart([
  //       ...cart, { name: e.target.name, quantity: newNum }]);
  //   }
  //   console.log(cart);
  // }

  const sum = (cart.reduce((previous, current) => previous + parseInt(current.quantity, 10), 0));

  return (
    <div className='shop'>
      <div className='cart'>
        <Link
          to="/shop/cart"
          state={cart}
        >
          Cart ({sum})
        </Link>
      </div>
      {/* <div className='items'>
        {items.map(
          (item) => (
            < Item
              key={item.id}
              name={item.name}
              effect={item.effect}
              handleChange={handleChange}
            />
          )
        )}
      </div> */}
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
