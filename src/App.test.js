import React from 'react';
import { render } from '@testing-library/react';
import {SocNetApp, App}  from './App';
import ReactDOM from 'react-dom';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without changing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocNetApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
