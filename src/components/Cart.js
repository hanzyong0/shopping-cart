import React from 'react'
import { useLocation } from 'react-router-dom'

function Cart() {
  const location = useLocation();
  console.log(location)
  const array = location.state;
  return (
    <div>
      Here are your items
      <p>{array.map(array => array.name)}</p>
    </div>
  )
}

export default Cart
