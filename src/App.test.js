import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders heading', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Choose a routine/i);
  expect(linkElement).toBeInTheDocument();
});
