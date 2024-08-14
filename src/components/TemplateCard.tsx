import React from 'react';

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  liveDemoUrl: string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, imageUrl, price, liveDemoUrl }) => {
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden w-full mx-auto border border-white/50 transition-all duration-300 hover:border-white hover:border-2 hover:shadow-2xl cursor-pointer">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 sm:text-xl text-center">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm sm:text-base text-center">{description}</p>
        <hr className="border-gray-600 mb-4" />
        <div className="flex">
          <button className="bg-black-600 hover:bg-black-700 text-white font-bold py-2 px-4 rounded flex-grow">
            {price}
          </button>
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black-600 hover:bg-black-300 text-white text-center font-bold py-2 px-4 rounded flex-grow"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
