// src/components/FilterSidebar.tsx
import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown, FaSearch } from 'react-icons/fa'; // Import search icon
import { GoXCircleFill } from 'react-icons/go';
import { degrees, experienceOptions, technicalSkills, softSkills } from '../data'; // Import filter data

interface FilterSidebarProps {
  className?: string;
}

export const Sidebar: React.FC<FilterSidebarProps> = () => {
  const [showDegreeDropdown, setShowDegreeDropdown] = useState(true);
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);
  const [showTechnicalSkillsDropdown, setShowTechnicalSkillsDropdown] = useState(false);
  const [showSoftSkillDropdown, setShowSoftSkillDropdown] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false); // For mobile filter toggle
  const [selectedTechnicalSkills, setSelectedTechnicalSkills] = useState<string[]>([]);
  const [selectedSoftSkills, setSelectedSoftSkills] = useState<string[]>([]);
  const [selectedDegrees, setSelectedDegrees] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = (dropdown: string) => {
    switch (dropdown) {
      case 'degree':
        setShowDegreeDropdown(prev => !prev);
        break;
      case 'experience':
        setShowExperienceDropdown(prev => !prev);
        break;
      case 'technicalSkills':
        setShowTechnicalSkillsDropdown(prev => !prev);
        break;
      case 'softSkills':
        setShowSoftSkillDropdown(prev => !prev);
        break;
      default:
        break;
    }
  };

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    filterType: 'degree' | 'experience' | 'technical' | 'soft'
  ) => {
    const value = event.target.value;
    switch (filterType) {
      case 'degree':
        setSelectedDegrees(prev =>
          prev.includes(value) ? prev.filter(d => d !== value) : [...prev, value]
        );
        break;
      case 'experience':
        setSelectedExperience(prev =>
          prev.includes(value) ? prev.filter(e => e !== value) : [...prev, value]
        );
        break;
      case 'technical':
        setSelectedTechnicalSkills(prev =>
          prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value]
        );
        break;
      case 'soft':
        setSelectedSoftSkills(prev =>
          prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value]
        );
        break;
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleFilterOptions = () => {
    setShowFilterOptions(prev => !prev);
  };

  const clearFilters = () => {
    setSelectedTechnicalSkills([]);
    setSelectedSoftSkills([]);
    setSelectedDegrees([]);
    setSelectedExperience([]);
  };

  const hasFilters =
    selectedTechnicalSkills.length > 0 ||
    selectedSoftSkills.length > 0 ||
    selectedDegrees.length > 0 ||
    selectedExperience.length > 0;

  const getDropdownIcon = (isOpen: boolean) => {
    return isOpen ? (
      <FaChevronDown className="inline-block ml-2" />
    ) : (
      <FaChevronRight className="inline-block ml-2" />
    );
  };

  return (
    <div className="flex flex-col w-full md:w-80 p-4 bg-white dark:bg-black rounded-md">
      {/* Search Bar for Mobile */}
      <div className="relative block md:block">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-full p-2 pl-12 mb-4 border-none rounded-md dark:bg-black dark:text-white dark:border-gray-600"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
      </div>

      {/* Mobile Filter Toggle Button */}
      <hr className="pb-1 md:hidden" />
      <button
        onClick={toggleFilterOptions}
        className="block border-none text-start md:hidden w-full bg-white dark:bg-black p-2 mb-4 border border-black dark:border-white rounded-md"
      >
        Filter By:
      </button>
      <hr className="pt-0 md:hidden" />
      {/* Filter Heading with Clear Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold dark:text-white hidden md:block">
          Filter Templates 
        </h2>
        <div className="flex flex-">
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 dark:text-blue-400"
            >
              <GoXCircleFill /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Search Bar for Desktop */}
      <div className="relative hidden md:block">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-full p-2 pl-10 mb-4 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
      </div>

      {/* Filter Options - Collapsible on Mobile */}
      {(showFilterOptions || !window.matchMedia('(max-width: 767px)').matches) && (
        <>
          {/* Degree Dropdown */}
          <button
            onClick={() => toggleDropdown('degree')}
            className="w-full bg-white dark:bg-black p-2 border-b border-gray-600 dark:border-gray-600 flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              {getDropdownIcon(showDegreeDropdown)} Degrees
            </div>
            {selectedDegrees.length > 0 && (
              <span className="bg-gray-200 dark:bg-white text-gray-800 dark:text-black rounded-full border border-gray-300 dark:border-gray-600 px-2 py-0">
                {selectedDegrees.length}
              </span>
            )}
          </button>
          {showDegreeDropdown && (
            <ul className="mt-2 space-y-2">
              {degrees.map(degree => (
                <li key={degree} className="flex items-center px-6">
                  <input
                    type="checkbox"
                    id={degree}
                    value={degree}
                    checked={selectedDegrees.includes(degree)}
                    onChange={e => handleFilterChange(e, 'degree')}
                    className="mr-2"
                  />
                  <label
                    htmlFor={degree}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    {degree}
                  </label>
                </li>
              ))}
            </ul>
          )}

          {/* Experience Dropdown */}
          <button
            onClick={() => toggleDropdown('experience')}
            className="w-full text-left bg-white dark:bg-black p-2 mt-4 border-b border-gray-300 dark:border-gray-600 flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              {getDropdownIcon(showExperienceDropdown)} Experience
            </div>
            {selectedExperience.length > 0 && (
              <span className="bg-gray-200 dark:bg-white text-gray-800 dark:text-black rounded-full border border-gray-300 dark:border-gray-600 px-2 py-0">
                {selectedExperience.length}
              </span>
            )}
          </button>
          {showExperienceDropdown && (
            <ul className="mt-2 space-y-2">
              {experienceOptions.map(exp => (
                <li key={exp} className="flex items-center px-6">
                  <input
                    type="checkbox"
                    id={exp}
                    value={exp}
                    checked={selectedExperience.includes(exp)}
                    onChange={e => handleFilterChange(e, 'experience')}
                    className="mr-2"
                  />
                  <label
                    htmlFor={exp}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    {exp}
                  </label>
                </li>
              ))}
            </ul>
          )}

          {/* Technical Skills */}
          <button
            onClick={() => toggleDropdown('technicalSkills')}
            className="w-full text-left bg-white dark:bg-black p-2 mt-4 border-b border-gray-300 dark:border-gray-600 flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              {getDropdownIcon(showTechnicalSkillsDropdown)} Technical Skills
            </div>
            {/* {selectedTechnicalSkills.length > 0 && <span>({selectedTechnicalSkills.length})</span>} */}
            {selectedTechnicalSkills.length > 0 && (
              <span className="bg-gray-200 dark:bg-white text-gray-800 dark:text-black rounded-full border border-gray-300 dark:border-gray-600 px-2 py-0">
                {selectedTechnicalSkills.length}
              </span>
            )}
          </button>
          {showTechnicalSkillsDropdown && (
            <ul className="mt-2 space-y-2">
            {technicalSkills.map(skill => (
              <li
                key={skill}
                className="flex items-center px-6 border border-black hover:bg-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:hover:bg-gray-600"
              >
                <input
                  type="checkbox"
                  id={skill}
                  value={skill}
                  checked={selectedTechnicalSkills.includes(skill)}
                  onChange={e => handleFilterChange(e, 'technical')}
                  className="mr-2 cursor-pointer accent-black dark:accent-white"
                />
                <label
                  htmlFor={skill}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </label>
              </li>
            ))}
          </ul>
          )}

          {/* Soft Skills */}
          <button
            onClick={() => toggleDropdown('softSkills')}
            className="w-full text-left bg-white dark:bg-black p-2 mt-4 border-b border-gray-300 dark:border-gray-600 flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              {getDropdownIcon(showSoftSkillDropdown)} Soft Skills
            </div>
            {selectedSoftSkills.length > 0 && (
              <span className="bg-gray-200 dark:bg-white text-gray-800 dark:text-black rounded-full border border-gray-300 dark:border-gray-600 px-2 py-0">
                {selectedSoftSkills.length}
              </span>
            )}
          </button>
          {showSoftSkillDropdown && (
            <ul className="mt-2 space-y-2">
              {softSkills.map(skill => (
                <li key={skill} className="flex items-center px-6">
                  <input
                    type="checkbox"
                    id={skill}
                    value={skill}
                    checked={selectedSoftSkills.includes(skill)}
                    onChange={e => handleFilterChange(e, 'soft')}
                    className="mr-2"
                  />
                  <label
                    htmlFor={skill}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
