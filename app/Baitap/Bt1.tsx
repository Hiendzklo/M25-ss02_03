"use client";

import React, { useState } from 'react';

const InputComponent: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col space-y-1">
      <label className="text-blue-600 font-medium">Label</label>
      <div className="relative w-64">
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="Placeholder"
          className="w-full p-2 pr-10 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {isPasswordVisible ? (
              <path d="M2.166 10C3.269 6.58 6.626 4 10 4s6.731 2.58 7.834 6c-1.103 3.42-4.46 6-7.834 6S3.269 13.42 2.166 10zM10 8a2 2 0 100 4 2 2 0 000-4zM10 10c.741 0 1.3-.584 1.3-1.3 0-.716-.559-1.3-1.3-1.3-.741 0-1.3.584-1.3 1.3 0 .716.559 1.3 1.3 1.3z" />
            ) : (
              <path d="M10 4c3.374 0 6.731 2.58 7.834 6-1.103 3.42-4.46 6-7.834 6S3.269 13.42 2.166 10C3.269 6.58 6.626 4 10 4zm0 2a2 2 0 110 4 2 2 0 010-4zm7.071 6.071l1.414 1.414-1.414 1.414-1.414-1.414 1.414-1.414zM5.293 4.707L6.707 3.293 8.121 4.707 6.707 6.121 5.293 4.707zm6.414 9.586l1.414-1.414 1.414 1.414-1.414 1.414-1.414-1.414zM4.707 14.707L3.293 13.293l1.414-1.414 1.414 1.414-1.414 1.414z" />
            )}
          </svg>
        </button>
      </div>
      <span className="text-gray-500 text-sm">Helper Text</span>
    </div>
  );
};

export default InputComponent;
