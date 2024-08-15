import React from 'react';
import { useTheme } from '../hooks/useTheme'; 

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  liveDemoUrl: string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, imageUrl, price, liveDemoUrl }) => {
  const { theme } = useTheme();
  return (
    <div className={`template-card rounded-lg shadow-lg overflow-hidden w-full mx-auto border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-2xl cursor-pointer ${theme === 'dark' ? 'dark' : ''}`}>
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-black mb-2 sm:text-xl text-center dark:text-white">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base text-center dark:text-white">{description}</p>
        <hr className="border-gray-300 mb-4 dark:border-gray-600" />
        <div className="flex">
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex-grow dark:bg-gray-600 dark:hover:bg-gray-500">
            {price}
          </button>
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-500 text-white text-center font-bold py-2 px-4 rounded flex-grow dark:bg-gray-600 dark:hover:bg-gray-400"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
