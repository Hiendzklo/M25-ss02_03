"use client";

import React, { useState } from 'react';

const SelectComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([1, 3]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = (index: number) => {
    setSelectedOptions((prev) =>
      prev.includes(index)
        ? prev.filter((option) => option !== index)
        : [...prev, index]
    );
  };

  const clearSelection = () => {
    setSelectedOptions([]);
  };

  const applySelection = () => {
    console.log('Applied selection:', selectedOptions);
    setIsOpen(false); // Đóng dropdown khi nhấn Apply
  };

  return (
    <div className="w-72">
      <label className="block text-sm font-medium text-gray-700 mb-1">Input Label</label>
      <div className="relative">
        <button
          type="button"
          className="w-full p-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between"
          onClick={toggleDropdown}
        >
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a8 8 0 110 16 8 8 0 010-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
            </svg>
            Select Option
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute mt-1 w-full bg-white border border-blue-500 rounded shadow-lg z-10">
            <div className="py-2">
              {[1, 2, 3, 4].map((option, index) => (
                <label
                  key={index}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleOption(index)}
                >
                  <span className="mr-2">Label</span>
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(index)}
                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    readOnly
                  />
                </label>
              ))}
            </div>
            <div className="flex justify-between p-2 border-t">
              <button
                type="button"
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                onClick={clearSelection}
              >
                Clear
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                onClick={applySelection}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectComponent;
