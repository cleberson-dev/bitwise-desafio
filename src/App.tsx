import React from 'react';
import Header from './components/Header';
import './App.scss';
import polygonImg from './img/polygon.png';

function App() {
  return (
    <div className="App">
      <Header />
      <img className="polygon" src={polygonImg} />
    </div>
  );
}

export default App;
