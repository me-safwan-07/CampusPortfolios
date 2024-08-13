import React from 'react';

interface TemplateCardProps {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  price: string;
  liveDemoUrl: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, author, imageUrl, price, liveDemoUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <p className="text-gray-500 mb-4">by {author}</p>
        <div className="flex justify-between items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {price}
          </button>
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;
