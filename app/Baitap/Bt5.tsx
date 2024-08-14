"use client";

import React from 'react';

const DeleteConfirmation: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-red-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m0-4h.01M12 6v.01M12 17a5 5 0 100-10 5 5 0 000 10z"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Delete blog post</h2>
          <p className="text-gray-600 mt-1">
            Are you sure you want to delete this post? This action cannot be undone.
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
