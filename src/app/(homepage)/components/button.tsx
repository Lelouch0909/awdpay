import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className="px-6 py-2 bg-highlight text-white 
      rounded-lg font-bold transform hover:-translate-y-1  hover:shadow-lg
      focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-opacity-50
      active:bg-highlight-dark active:shadow-none
      transition duration-400"
      {...props}
    >
      {children || 'Button'}
    </button>
  );
}

export default Button;
