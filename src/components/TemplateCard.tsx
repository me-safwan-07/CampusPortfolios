import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { FaEye } from "react-icons/fa";

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  liveDemoUrl: string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, imageUrl, price, liveDemoUrl }) => {
  const { theme } = useTheme();
  
  // Create a URL-friendly slug for the template
  const templateSlug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`template-card rounded-lg shadow-lg overflow-hidden mx-auto border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-2xl cursor-pointer ${theme === 'dark' ? 'dark' : ''} max-w-xs max-h-[500px]`}>
      <Link to={`/templates/${templateSlug}`}>
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover max-h-50" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-black mb-2 text-center dark:text-white">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm text-center dark:text-white">{description}</p>
          <hr className="border-gray-300  dark:border-gray-600" />
        </div>  
      </Link>
      <div className="flex pb-2 justify-around ">
          <button className="text-black border dark:text-white font-bold py-2 px-4 rounded ark:bg-gray-600 cursor-default" >
            {price}
          </button>
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-center font-bold py-2 gap-2 px-4 flex justify-center align-center rounded border"
          >
            <FaEye />
            Live Demo
          </a>
        </div>
    </div>
    
  );
};
