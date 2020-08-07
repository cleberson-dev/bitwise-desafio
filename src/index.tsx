import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import Router from './router';
import client from './graphql-client';



if (!process.env.REACT_APP_GITHUB_TOKEN) {
  throw new Error('Token de acesso requerido');
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
