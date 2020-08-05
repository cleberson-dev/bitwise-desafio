import React from 'react';
import './styles.scss';
import instagram from '../../img/social/instagram.svg';
import linkedin from '../../img/social/linkedin.svg';
import medium from '../../img/social/medium.svg';

function Footer() {
  const socialIcons = { instagram, linkedin, medium };
  return (
    <footer>
      <address>
        <a href="#">
          <img src={socialIcons.medium} alt="Medium icon" />
        </a>
        <a href="#">
          <img src={socialIcons.linkedin} alt="Linkedin icon" />
        </a>
        <a href="#">
          <img src={socialIcons.instagram} alt="Instagram icon" />
        </a>
      </address>
    </footer>
  );
}

export default Footer;