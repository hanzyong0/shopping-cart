import './App.css';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='header'>
        <h1>Shopping Cart</h1>
        <nav className='nav-links'>
          <NavLink
            activeclassname="active"
            to="/home"
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
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
