// src/components/FilterSidebar.tsx
import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown, FaSearch } from 'react-icons/fa'; // Import search icon
import { GoXCircleFill } from "react-icons/go";

interface FilterSidebarProps {
  // Add any props you might need here
  className:string;
}

export const Sidebar: React.FC<FilterSidebarProps> = () => {
  const [showDegreeDropdown, setShowDegreeDropdown] = useState(true);
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);
  const [showTechncalSkillsDropdown, setShowTechncalSkillsDropdown] = useState(false);
  const [showSoftSkillDropdown, setShowSoftSkillDropdown] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false); // For mobile filter toggle
  const [technicalSkills, setTechnicalSkills] = useState<string[]>([]);
  const [softSkills, setSoftSkills] = useState<string[]>([]);
  const [degrees, setDegrees] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
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
        setShowTechncalSkillsDropdown(prev => !prev);
        break;
      case 'softSkills':
        setShowSoftSkillDropdown(prev => !prev);
        break;
      default:
        break;
    }
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>, skillType: 'technical' | 'soft') => {
    const skill = event.target.value;
    if (skillType === 'technical') {
      setTechnicalSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
    } else {
      setSoftSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
    }
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>, filterType: 'degree' | 'experience') => {
    const value = event.target.value;
    if (filterType === 'degree') {
      setDegrees(prev => prev.includes(value) ? prev.filter(d => d !== value) : [...prev, value]);
    } else if (filterType === 'experience') {
      setExperience(prev => prev.includes(value) ? prev.filter(e => e !== value) : [...prev, value]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleFilterOptions = () => {
    setShowFilterOptions(prev => !prev);
  };

  const clearFilters = () => {
    setTechnicalSkills([]);
    setSoftSkills([]);
    setDegrees([]);
    setExperience([]);
  };

  // Determine if any filters are applied
  const hasFilters = 
    technicalSkills.length > 0 || 
    softSkills.length > 0 || 
    degrees.length > 0 || 
    experience.length > 0;

  const getDropdownIcon = (isOpen: boolean) => {
    return isOpen ? <FaChevronDown className="inline-block ml-2" /> : <FaChevronRight className="inline-block ml-2" />;
  }

  return (
    <div className="flex flex-col w-full w-xs p-4 bg-white dark:bg-black shadow-lg md:w-80">
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
      <hr className='pb-3'/>
      <button
        onClick={toggleFilterOptions}
        className="block border-none text-start md:hidden w-full bg-white dark:bg-black p-2 mb-4 border border-black dark:border-white rounded-md"
      >
        Filter By:
      </button>
      <hr className='pb-1'/>
      {/* Filter Heading with Clear Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold dark:text-white hidden md:block">Filter Templates</h2>
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
            className="w-full bg-white dark:bg-black p-2 border border-gray-300 dark:border-gray-600 rounded-md flex justify-between items-center"
          >
            <div className="flex items-center">
              {getDropdownIcon(showDegreeDropdown)} Degrees
            </div>
            {degrees.length > 0 && <span>({degrees.length})</span>}
          </button>
          {showDegreeDropdown && (
            <ul className="mt-2 space-y-2">
              {['BCom', 'BBA', 'BCA'].map(degree => (
                <li key={degree} className="flex items-center">
                  <input
                    type="checkbox"
                    id={degree}
                    value={degree}
                    checked={degrees.includes(degree)}
                    onChange={(e) => handleFilterChange(e, 'degree')}
                    className="mr-2"
                  />
                  <label htmlFor={degree} className="text-gray-700 dark:text-gray-300">{degree}</label>
                </li>
              ))}
            </ul>
          )}

          {/* Experience Dropdown */}
          <button
            onClick={() => toggleDropdown('experience')}
            className="w-full text-left bg-white dark:bg-black p-2 mt-4 border border-gray-300 dark:border-gray-600 rounded-md flex justify-between items-center"
          >
            <div className="flex items-center">
              {getDropdownIcon(showExperienceDropdown)} Experience
            </div>
            {experience.length > 0 && <span>({experience.length})</span>}
          </button>
          {showExperienceDropdown && (
            <ul className="mt-2 space-y-2">
              {['Part-Time', 'Internship', 'Full-Time', 'Freelancing'].map(exp => (
                <li key={exp} className="flex items-center">
                  <input
                    type="checkbox"
                    id={exp}
                    value={exp}
                    checked={experience.includes(exp)}
                    onChange={(e) => handleFilterChange(e, 'experience')}
                    className="mr-2"
                  />
                  <label htmlFor={exp} className="text-gray-700 dark:text-gray-300">{exp}</label>
                </li>
              ))}
            </ul>
          )}

          {/* Technical Skills */}
          <button
            onClick={() => toggleDropdown('technicalSkills')}
            className="w-full text-left bg-white dark:bg-black p-2 mt-4 border border-gray-300 dark:border-gray-600 rounded-md flex justify-between items-center"
          >
            {getDropdownIcon(showTechncalSkillsDropdown)} Technical Skills
            {technicalSkills.length > 0 && <span>({technicalSkills.length})</span>}
          </button>
          {showTechncalSkillsDropdown && (
            <ul className="mt-2 space-y-2">
              {['JavaScript', 'React', 'Node.js', 'CSS'].map(skill => (
                <li key={skill} className="flex items-center">
                  <input
                    type="checkbox"
                    id={skill}
                    value={skill}
                    checked={technicalSkills.includes(skill)}
                    onChange={(e) => handleSkillChange(e, 'technical')}
                    className="mr-2"
                  />
                  <label htmlFor={skill} className="text-gray-700 dark:text-gray-300">{skill}</label>
                </li>
              ))}
            </ul>
          )}

          {/* Soft Skills */}
          <button
            onClick={() => toggleDropdown('softSkills')}
            className="w-full text-left bg-white dark:bg-black p-2 mt-4 gap-2 border border-gray-300 dark:border-gray-600 rounded-md flex justify-between items-center"
          >
            {getDropdownIcon(showSoftSkillDropdown)} Soft Skills
            {softSkills.length > 0 && <span>({softSkills.length})</span>}
          </button>
          {showSoftSkillDropdown && (
            <ul className="mt-2 space-y-2">
              {['Communication', 'Teamwork', 'Problem Solving', 'Adaptability'].map(skill => (
                <li key={skill} className="flex items-center">
                  <input
                    type="checkbox"
                    id={skill}
                    value={skill}
                    checked={softSkills.includes(skill)}
                    onChange={(e) => handleSkillChange(e, 'soft')}
                    className="mr-2"
                  />
                  <label htmlFor={skill} className="text-gray-700 dark:text-gray-300">{skill}</label>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
