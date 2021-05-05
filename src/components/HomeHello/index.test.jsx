import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Hello from './index';

let container = null;
beforeEach(() => {
  // Setting DOM for the render
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanning
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Greeting in Home Page', () => {
  // Case empty
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe('Howdy, Good night Wizeliner!');

  // Case morning
  act(() => {
    render(<Hello hour="10" />, container);
  });
  expect(container.textContent).toBe('Howdy, Good morning Wizeliner!');

  // Case Afternoon
  act(() => {
    render(<Hello hour="12" />, container);
  });
  expect(container.textContent).toBe('Howdy, Good afternoon Wizeliner!');

  // Case Night
  act(() => {
    render(<Hello hour="21" />, container);
  });
  expect(container.textContent).toBe('Howdy, Good night Wizeliner!');
});
