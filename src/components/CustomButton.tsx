import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const CustomButton: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`
        px-5 py-2.5 
        bg-indigo-600 
        hover:bg-indigo-500 
        active:bg-indigo-700 
        text-white font-medium 
        rounded-lg shadow-md 
        active:scale-95 transition-all duration-150 
        cursor-pointer text-sm ${className}
      `}
    >
      {children}
    </button>
  );
};
