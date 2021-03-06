import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/Home';
import Header from './components/Header';
import SearchResultPage from './pages/SearchResult';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/search/:username">
        <SearchResultPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
