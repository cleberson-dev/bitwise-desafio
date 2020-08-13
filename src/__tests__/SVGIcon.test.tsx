import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SVGIcon from '../components/SVGIcon';
import octocat from '../img/octocat.svg';
import { assert } from 'console';

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it('should render', () => {
  act(() => {
    render(<SVGIcon src={octocat} />, container);
  });
  expect(container.children).toHaveLength(1);
});