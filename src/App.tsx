import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Route to="/">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
