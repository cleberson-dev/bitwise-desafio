import React from 'react';
import './styles.scss';
import SVGIcon from '../SVGIcon';
import Social from '../../interfaces/Social.interface';

interface SocialsProps {
  socials: Social[];
}

const Socials: React.FC<SocialsProps> = ({ socials }) => {
  return (
    <address className="social-links">
      {socials.map(social => (
        <a href={social.link}>
          <SVGIcon 
            src={social.iconUrl}
            size={social.iconSize}
            color={social.iconColor}
          />
        </a>
      ))}
    </address>
  );
}

export default Socials;