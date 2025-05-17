import React from 'react';
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
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
      </button> </motion.div>

  );
}

export default Button;
