import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";

test('dummy test', () => {
  const { getByText } = render(<BrowserRouter><App/></BrowserRouter>);
  const linkElement = getByText(/treble/i);
  expect(linkElement).toBeInTheDocument();
});

