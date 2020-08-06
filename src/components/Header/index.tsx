import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.scss';
import SearchBar from '../SearchBar';
import Socials from '../Socials';
import logo from '../../img/logo.png';
import instagram from "../../img/social/instagram.svg";
import linkedin from "../../img/social/linkedin.svg";
import medium from "../../img/social/medium.svg";
import Social from '../../interfaces/Social.interface';

function Header() {
  const location = useLocation();
  const { pathname: currentPath } = location;

  const socials: Social[] = [
    { name: "Instagram", link: "#", iconUrl: instagram },
    { name: "Linkedin", link: "#", iconUrl: linkedin },
    { name: "Medium", link: "#", iconUrl: medium },
  ];

  return (
    <header>
      <img src={logo} alt="Bitwise logo" />
      { currentPath !== '/' && (
        <SearchBar hideButton onSearch={alert} />
      )}
      <Socials socials={socials} />
    </header>
  );
}

export default Header;