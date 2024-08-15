// src/components/FilterSidebar.tsx
import React, { useState } from 'react';

interface FilterSidebarProps {
  // Add any props you might need here
} 

export const Sidebar: React.FC<FilterSidebarProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <div className=" flex w-full max-w-xs p-8 bg-gray-100 shadow-lg md:w-80">
      <div className="relative">
        <div className="w-full  md:flex-row md:items-center">
          <h2 className="text-xl font-semibold mb-2 md:mb-0 md:mr-4">Filter Template</h2>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={toggleDropdown}
          className="mt-2 w-full text-left bg-gray-200 p-2 border border-gray-300 rounded-md md:mt-4"
        >
          Template Options
        </button>
        {showDropdown && (
          <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10 md:mt-2">
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 1</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 2</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Option 3</li>
          </ul>
        )}
      </div>
    </div>
  );
};
