import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

test('home', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(screen.getByText(/Welcome to Poke Mart/)).toBeInTheDocument();
  expect(screen.getByText(/Click here to Shop/)).toBeInTheDocument();

})