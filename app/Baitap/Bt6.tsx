"use client";

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="https://via.placeholder.com/50x50?text=Logo"
              alt="Logo"
            />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Updates
                </a>
                <a href="#" className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </a>
                <a href="#" className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </a>
                <a href="#" className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A3.5 3.5 0 119.621 13m0 0a3.5 3.5 0 11-4.5 4.5m0-4.5A3.5 3.5 0 1012 12a3.5 3.5 0 004.5 4.5m0-4.5A3.5 3.5 0 1012 12m0 0v1m0 3a3.5 3.5 0 11-4.5-4.5m0 0A3.5 3.5 0 1012 12a3.5 3.5 0 004.5 4.5m0-4.5A3.5 3.5 0 1012 12m0 0V8a3.5 3.5 0 00-7 0v1m10 6a3.5 3.5 0 11-7 0V8a3.5 3.5 0 00-7 0v1m0 10a3.5 3.5 0 0110 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
