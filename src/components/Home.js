import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='welcome'>
        <p className='first'>Welcome to Poke Mart</p>
        <p className='second'>What would you like to purchase?</p>
        <Link to="/shop">Click here to Shop</Link>
      </div>
    </div>
  )
}

export default Home
