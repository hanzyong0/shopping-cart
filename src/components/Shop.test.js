import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Shop from './Shop';

test('Shop', () => {
  render(
    <BrowserRouter>
      <Shop />
    </BrowserRouter>
  )

  expect(screen.getByText(/cart/i)).toBeInTheDocument();
  expect(screen.getByText(/poke ball/i)).toBeInTheDocument();
  expect(screen.getByText(/cart()/i)).toBeInTheDocument();
});