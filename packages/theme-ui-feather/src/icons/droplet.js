import React from 'react';
import SVG from '../SVG';

const Droplet = ({ color = 'currentColor', size = 24, ...otherProps }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </SVG>
  );
};

export default Droplet;
