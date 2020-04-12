import React from 'react';
import SVG from '../SVG';

const CornerDownLeft = ({
  color = 'currentColor',
  size = 24,
  ...otherProps
}) => {
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
      <polyline points="9 10 4 15 9 20"></polyline>
      <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
    </SVG>
  );
};

export default CornerDownLeft;
