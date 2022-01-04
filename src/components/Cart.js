import React from 'react'

function Cart({ cart, quantitySum, priceSum }) {
  return (
    <div className='cart'>
      <div className='cart-title'>Cart Items</div>
      <div className='items'>{cart.map(
        (item) =>
          <div key={item.name} className='item'>
            <div className='left'>
              <img src={item.img} alt={item.name}></img>
              <div className='item-name'>{item.name}</div>
            </div>
            <div className='right'>
              <div>Quantity: {item.quantity}</div>
              <div>Price: {item.price}</div>
            </div>
          </div>
      )}
      </div>
      <div className='cart-summary'>
        <div>Total Price: {priceSum}</div>
        <div>Total Quantity: {quantitySum}</div>
        <button type="button">Checkout</button>
      </div>
    </div>
  )
}

export default Cart
