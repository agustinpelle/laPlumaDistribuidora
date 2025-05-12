import React from 'react';

const CustomFeatherLogo = ({ size = 40, className = "" }) => {
  return (
    <img
      src="/feather.png"
      alt="Custom Feather Logo"
      width="35"
      className={className}
      aria-label="Custom Feather Logo"
    />
  );
};

export default CustomFeatherLogo;
