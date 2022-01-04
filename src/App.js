import './App.css';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <h1>Shopping Cart</h1>
        <nav className='nav-links'>
          <NavLink
            activeclassname="active"
            to="/shopping-cart"
          >
            Home
          </NavLink>
          <NavLink
            activeclassname="active"
            to="/shop"
          >
            Shop
          </NavLink>
        </nav>
      </div>
      <div className='main'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
