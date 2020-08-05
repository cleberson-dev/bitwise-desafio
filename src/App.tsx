import React from 'react';
import Header from './components/Header';
import './App.scss';
import polygonImg from './img/polygon.png';
import illustration from './img/illustration.svg';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="intro">
        <div className="left">
          <p>Buscar um usuário no <strong>Github</strong><br/> ficou muito <strong>fácil!</strong></p>
          <SearchBar />
        </div>
          <img src={illustration} alt="Illustration" />
      </div>
      <Footer />      


      <img className="polygon" src={polygonImg} />
    </div>
  );
}

export default App;
