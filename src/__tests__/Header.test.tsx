import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => ({ pathname: '/' })),
  useHistory: jest.fn(() => ({ push: mockedHistoryPush })) 
}));

jest.mock('../components/SearchBar', () => (props: any) => (
  <div>SearchBar</div>
));
jest.mock('../components/Socials', () => (props: any) => (
  <div>Socials</div>
));

// eslint-disable-next-line import/first
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line import/first
import Header from '../components/Header';

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
    render(<Header />, container);
  });

  expect(container.children).toHaveLength(1);
  expect(container.querySelector('header')).toBeDefined();
});

it('should only have the logo on home page', () => {
  act(() => {
    render(<Header />, container);
  });

  const header = container.querySelector('header');
  expect(header?.children).toHaveLength(1);
  expect(header?.querySelector('a img')).toBeDefined();
});

it('should render the SearchBar e Socials components', () => {
  useLocation.mockImplementation(() => ({ pathname: '/search' }));
  act(() => {
    render(<Header />, container);
  });

  const header = container.querySelector('header');
  expect(header?.children).toHaveLength(3);
});