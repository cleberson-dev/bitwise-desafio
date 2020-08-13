import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import ReposTable from '../components/ReposTable';
import Repo from '../interfaces/Repo.interface';

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
  const repos: Repo[] = [];
  act(() => {
    render(<ReposTable repos={repos} />, container);
  });

  expect(container.children).toHaveLength(1);

  const table = container.querySelector('table');
  expect(table).toBeDefined();
});

it('should have 3 repos on the table', () => {
  const repos: Repo[] = [
    { 
      name: '', 
      commitsCount: 0, 
      lastCommitMessage: '', 
      lastCommitHash: '',
      url: ''
    },
    { 
      name: '', 
      commitsCount: 0, 
      lastCommitMessage: '', 
      lastCommitHash: '',
      url: ''
    },
    { 
      name: '', 
      commitsCount: 0, 
      lastCommitMessage: '', 
      lastCommitHash: '',
      url: ''
    },
  ];

  act(() => {
    render(<ReposTable repos={repos} />, container);
  });
  
  const tableBody = container.querySelector('table tbody');
  expect(tableBody?.children).toHaveLength(3);
});
