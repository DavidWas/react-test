import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("magnetic_button"); // screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
