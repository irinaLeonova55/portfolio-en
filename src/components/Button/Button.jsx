import React, { forwardRef } from 'react';

const Button = forwardRef(({ className, style, onClick }, ref) => {
  return (
    <a
      ref={ref}
      href="#contacts"
      className={className}
      style={style}
      onClick={onClick}
    >
      Contact Me
    </a>
  );
});

export default Button;
