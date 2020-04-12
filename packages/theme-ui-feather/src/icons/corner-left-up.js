import React from 'react';
import SVG from '../SVG';

const CornerLeftUp = ({ color = 'currentColor', size = 24, ...otherProps }) => {
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
      <polyline points="14 9 9 4 4 9"></polyline>
      <path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>
    </SVG>
  );
};

export default CornerLeftUp;
