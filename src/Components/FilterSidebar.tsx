import React from 'react';

interface FilterOption {
  id: string;
  label: string;
}

const filterOptions: FilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'starter', label: 'Starter' },
  { id: 'ecommerce', label: 'Ecommerce' },
  { id: 'blog', label: 'Blog' },
  // Add more filter options here
];

interface FilterSidebarProps {
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ selectedFilters, setSelectedFilters }) => {

  const handleCheckboxChange = (id: string) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter(filterId => filterId !== id));
    } else {
      setSelectedFilters([...selectedFilters, id]);
    }
  };

  return (
    <aside className="w-1/4 p-6 bg-gray-900 text-white">
      <h3 className="text-xl font-bold mb-4">Filter Templates</h3>
      <input type="text" placeholder="Search..." className="w-full p-2 mb-4 bg-gray-800 rounded" />
      <ul>
        <li className="font-bold mb-2">Use Case</li>
        {filterOptions.map(option => (
          <li key={option.id} className="mb-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedFilters.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{option.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FilterSidebar;
