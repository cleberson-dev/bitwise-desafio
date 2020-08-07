import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const { pathname: currentPath } = location;

  const searchHandler = (username: string) => {
    history.push(`/search/${username}`);
  }

  const iconSize = 2;
  const iconColor = '#fd71ea';
  const socials: Social[] = [
    { name: "Instagram", link: "#", iconUrl: instagram, iconSize, iconColor },
    { name: "Linkedin", link: "#", iconUrl: linkedin, iconSize, iconColor },
    { name: "Medium", link: "#", iconUrl: medium, iconSize, iconColor },
  ];

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