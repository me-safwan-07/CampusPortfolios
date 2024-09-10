import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown, FaSearch } from 'react-icons/fa';
import { GoXCircleFill } from 'react-icons/go';
import { degrees, experienceOptions, technicalSkills, softSkills, social } from '../data';

type FilterKey = 'degree' | 'experience' | 'technicalSkills' | 'softSkills' | 'social';

interface FilterSidebarProps {
  className?: string;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = () => {
  const [dropdownStates, setDropdownStates] = useState<Record<FilterKey, boolean>>({
    degree: true,
    experience: false,
    technicalSkills: false,
    softSkills: false,
    social: false,
  });
  
  const [filterStates, setFilterStates] = useState<Record<FilterKey, string[]>>({
    technicalSkills: [],
    softSkills: [],
    degree: [],
    experience: [],
    social: [],
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const filterData: Record<FilterKey, string[]> = {
    degree: degrees,
    experience: experienceOptions,
    technicalSkills: technicalSkills,
    softSkills: softSkills,
    social: social,
  };

  const toggleDropdown = (key: FilterKey) => {
    setDropdownStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>, filterType: FilterKey) => {
    const value = event.target.value;
    setFilterStates(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleFilterOptions = () => {
    setShowFilterOptions(prev => !prev);
  };

  const clearFilters = () => {
    setFilterStates({
      technicalSkills: [],
      softSkills: [],
      degree: [],
      experience: [],
      social: [],
    });
  };

  const hasFilters = Object.values(filterStates).some(filters => filters.length > 0);

  const getDropdownIcon = (isOpen: boolean) => (
    isOpen ? <FaChevronDown className="ml-2" /> : <FaChevronRight className="ml-2" />
  );

  return (
    <div className="flex flex-col w-full md:w-80 p-4 bg-white dark:bg-black rounded-md">
      {/* Search Bar for Mobile */}
      <div className="relative block md:hidden flex">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-full p-2 pl-12 mb-4 border-none rounded-md dark:bg-black dark:text-white dark:border-gray-600"
        />
        <FaSearch className="absolute left-5 top-5 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
      </div>

      {/* Mobile Filter Toggle Button */}
      <hr className="md:hidden" />
      <button
        onClick={toggleFilterOptions}
        className="flex justify-between mt-3  align-center block border-none text-start md:hidden w-full bg-white dark:bg-black p-2 mb-4 border border-black dark:border-white rounded-md"
      >
        Filter By: 
        { showFilterOptions === true ? <FaChevronDown className='m-1'/>: <FaChevronRight className='m-1'/>}
      </button>
      <hr className="md:hidden" />

      {/* Filter Heading with Clear Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold dark:text-white hidden md:block pb-2">
          Filter Templates
        </h1>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className=" md:p0 text-sm flex flex-grow gap-2 justify-center items-center mx-auto border p-1 rounded-md text-gray-500 border-gray-500 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white"
          >
            <GoXCircleFill className='h-5' /> Clear
          </button>
        )}
      </div>

      {/* Search Bar for Desktop */}
      <div className="relative hidden md:block cursor-pointer flex">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-full p-2 pl-10 mb-4 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border"
        />
        <FaSearch className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
      </div>

      {/* Filter Options - Collapsible on Mobile */}
      {(showFilterOptions || !window.matchMedia('(max-width: 767px)').matches) && (
        <>
          {Object.keys(filterData).map(filter => {
            const key = filter as FilterKey;
            return (
              <div key={key}>
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full bg-white dark:bg-black p-2 border-b border-gray-600 dark:border-gray-600 flex justify-between items-center"
                >
                  <div className="flex items-center pb-1 gap-2">
                    {getDropdownIcon(dropdownStates[key])} {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </div>
                  {filterStates[key].length > 0 && (
                    <span className="bg-gray-200 dark:bg-white text-gray-800 dark:text-black rounded-full border border-gray-300 dark:border-gray-600 px-2 py-0">
                      {filterStates[key].length}
                    </span>
                  )}
                </button>
                {dropdownStates[key] && (
                  <ul className="mt-4 space-y-2">
                    {filterData[key].map(item => (
                      <li key={item} className="flex items-center px-6 cursor-pointer">
                        <input
                          type="checkbox"
                          id={item}
                          value={item}
                          checked={filterStates[key].includes(item)}
                          onChange={(e) => handleFilterChange(e, key)}
                          className="mr-2 w-4 h-4 border-none rounded accent-black dark:accent-white cursor-pointer"
                        />
                        <label htmlFor={item} className="text-gray-700 dark:text-gray-300 cursor-pointer">
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FilterSidebar;
