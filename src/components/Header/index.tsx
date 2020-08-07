import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './styles.scss';
import SearchBar from '../SearchBar';
import Socials from '../Socials';
import logo from '../../img/logo.png';
import socialContacts from '../../socials';

import Social from '../../interfaces/Social.interface';

function Header() {
  const location = useLocation();
  const history = useHistory();
  const { pathname: currentPath } = location;

  const searchHandler = (username: string) => {
    history.push(`/search/${username}`);
  }

  const iconSize = 2;
  const iconColor = '#fd71ea';
  const socials: Social[] = socialContacts.map(social => ({
    ...social, iconSize, iconColor 
  }));

  return (
    <header>
      <a href="/">
        <img src={logo} alt="Bitwise logo" />
      </a>
      { currentPath !== '/' && (
        <>
          <SearchBar hideButton onSearch={searchHandler} />
          <Socials socials={socials} />
        </>
      )}
    </header>
  );
}

export default Header;