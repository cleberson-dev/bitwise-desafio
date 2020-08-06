import React from 'react';
import './styles.scss';
import Social from '../../interfaces/Social.interface';

interface SocialsProps {
  socials: Social[];
}

const Socials: React.FC<SocialsProps> = ({ socials }) => {
  return (
    <address className="social-links">
      {socials.map(social => (
        <a href={social.link}>
          <img src={social.iconUrl} alt={`Ícone: ${social.name}`} />
        </a>
      ))}
    </address>
  );
}

export default Socials;