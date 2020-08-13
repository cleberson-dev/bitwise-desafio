import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer from '../components/Footer';
import MockedSocials from '../components/Socials';

let container: HTMLElement;

jest.mock('../components/Socials', () => (props: any) => (
  <div>Socials</div>
));

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
    render(<Footer />, container);
  });

  expect(container.children).toHaveLength(1);
  expect(container.querySelector('footer')).toBeDefined();
});