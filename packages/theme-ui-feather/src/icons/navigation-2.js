import React from 'react';
import SVG from '../SVG';

const Navigation2 = ({ color = 'currentColor', size = 24, ...otherProps }) => {
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
      <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
    </SVG>
  );
};

export default Navigation2;
