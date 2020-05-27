import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('dummy test', () => {
  const { getByText } = render(<App />);
  const testElement = getByText(/Musical Medium/i);
  
  expect(testElement).toBeInTheDocument();
});
