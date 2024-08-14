"use client";

import React from 'react';

const FormLogin: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Form Sign up</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">Name</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Email</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          type="email"
          placeholder="you@company.com"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Phone number</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          type="tel"
          placeholder="+84 (123) 456-789"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Address</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Tell us a little about the project..."
        ></textarea>
      </div>
      <div className="mb-6">
        <label className="block font-medium mb-2">Skills</label>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
            <span className="ml-2">HTML</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
            <span className="ml-2">JavaScript</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
            <span className="ml-2">UX design</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
            <span className="ml-2">ReactJS</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
            <span className="ml-2">CSS</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
            <span className="ml-2">Java</span>
          </label>
        </div>
      </div>
      <button className="w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700">
        Sign up
      </button>
    </div>
  );
};

export default FormLogin;
