import { render } from '@testing-library/react';
import * as React from 'react';
import App from '.';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/check out my game/i);
  expect(linkElement).toBeInTheDocument();
});
