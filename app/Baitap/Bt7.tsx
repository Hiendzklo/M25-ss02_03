"use client";

import React from 'react';

interface BaseButtonProps {
  type: 'success' | 'warning' | 'danger' | 'primary';
  children: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({ type, children }) => {
  const baseStyle =
    'px-4 py-2 font-semibold text-white rounded-lg focus:outline-none';
  
  const typeStyles = {
    success: 'bg-green-600 hover:bg-green-700',
    warning: 'bg-orange-500 hover:bg-orange-600',
    danger: 'bg-red-600 hover:bg-red-700',
    primary: 'bg-blue-600 hover:bg-blue-700',
  };

  return (
    <button className={`${baseStyle} ${typeStyles[type]}`}>
      {children}
    </button>
  );
};

export default BaseButton;
