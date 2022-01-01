import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Home from './Home';

test('home', () => {
  render(<Home />);

  expect(screen.getByText(/Home/)).toBeInTheDocument();
  expect(screen.queryByText(/home/)).toBeNull();

})