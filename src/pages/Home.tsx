import React from 'react';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import polygonImg from '../img/polygon.png';
import illustration from '../img/illustration.svg';

function HomePage() {
  return (
    <>
      <main>
        <div className='intro'>
          <div className='left'>
            <p>
              Buscar um usuário no <strong>Github</strong>
              <br /> ficou muito <strong>fácil!</strong>
            </p>
            <SearchBar />
          </div>
          <img src={illustration} alt='Illustration' />
        </div>
        <img className='polygon' src={polygonImg} />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
