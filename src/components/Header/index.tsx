import React from 'react';
import logo from '../../img/logo.png';
import './styles.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Bitwise logo" />
    </header>
  );
}

export default Header;