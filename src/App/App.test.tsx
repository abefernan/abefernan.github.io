import { render } from '@testing-library/react';
import * as React from 'react';
import { App } from '.';

test('renders page title', async () => {
  const { findAllByText } = render(<App />);
  const [h1Element] = await findAllByText(/@abefernan/i);
  expect(h1Element.tagName).toBe('H1');
});
