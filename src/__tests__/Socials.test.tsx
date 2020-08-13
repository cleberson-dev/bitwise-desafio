import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Socials from '../components/Socials';
import Social from '../interfaces/Social.interface';

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
  const socials: Social[] = [];
  
  act(() => {
    render(<Socials socials={socials} />, container);
  });
  expect(container.children).toHaveLength(1);
  expect(container.querySelector('address')).toBeDefined();
});

it('should list 3 links', () => {
  const socials: Social[] = [
    { name: 'social1', iconUrl: '', link: '#' },
    { name: 'social2', iconUrl: '', link: '#' },
    { name: 'social3', iconUrl: '', link: '#' },
  ];

  act(() => {
    render(<Socials socials={socials} />, container);
  });

  expect(container.querySelectorAll('address a')).toHaveLength(3);
});