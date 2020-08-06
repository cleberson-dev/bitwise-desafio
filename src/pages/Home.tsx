import React from 'react';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import polygonImg from '../img/polygon.png';
import illustration from '../img/illustration.svg';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  const searchHandler = (username: string) => {
    history.push(`/search/${username}`);
  }

  return (
    <>
      <main>
        <img className='polygon' src={polygonImg} />
        <div className='intro'>
          <div className='left'>
            <p>
              Buscar um usuário no <strong>Github</strong>
              <br /> ficou muito <strong>fácil!</strong>
            </p>
            <SearchBar onSearch={searchHandler} />
          </div>
          <img src={illustration} alt='Illustration' />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
