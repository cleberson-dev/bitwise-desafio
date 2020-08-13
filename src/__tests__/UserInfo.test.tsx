import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import UserInfo from '../components/UserInfo';

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

const user = {
  name: 'cleberson-dev',
  avatar: '',
  reposCount: 50,
};

it('should render', () => {
  act(() => {
    render(<UserInfo {...user} />, container);
  });
  expect(container.children).toHaveLength(1);
  expect(container.querySelector('.user-info')?.children).toHaveLength(3);
});
