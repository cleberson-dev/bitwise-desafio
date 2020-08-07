import React from 'react';
import { ReactSVG } from 'react-svg';

interface SVGIconProps {
  src: string;
  color?: string;
  size?: number;
}

const SVGIcon: React.FC<SVGIconProps> = ({ src, color = '#FFF', size = 1 }) => {
  return (
    <ReactSVG 
      src={src}
      beforeInjection={(svg) => {
        const styleAttrs = `
          width: calc(1rem * ${size});
          height: calc(1rem * ${size});
        `;
        svg.setAttribute('fill', color);
        svg.setAttribute('style', styleAttrs);
      }}
    />
  )
}

export default SVGIcon;