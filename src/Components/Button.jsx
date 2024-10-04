import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="text-stone-300 bg-stone-700 active:bg-stone-800 py-2 px-5 rounded-md font-medium  hover:bg-stone-600 hover:text-stone-200 transition-colors duration-300 text-sm tracking-wider"
      {...props}
    >
      + {children}
    </button>
  );
};

export default Button;
