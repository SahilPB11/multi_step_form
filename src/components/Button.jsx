// src/components/Button.js
import React from "react";

const Button = ({ onClick, children, className }) => (
  <button onClick={onClick} className={`px-4 py-2 ${className}`}>
    {children}
  </button>
);

export default Button;
