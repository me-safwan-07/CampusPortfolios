import React from 'react';
import { useParams } from 'react-router-dom';
import { templates } from '../data'; // Adjust path as necessary

const TemplateDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the template ID from the URL

  // Find the selected template based on the slug
  const template = templates.find(t => t.title.toLowerCase().replace(/\s+/g, '-') === id);

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{template.title}</h1>
      <img src={template.imageUrl} alt={template.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg mb-4">{template.description}</p>
      <p className="text-xl font-bold mb-4">Price: {template.price}</p>
      <a href={template.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
        View Live Demo
      </a>
      <div className="relative h-[80dvh] overflow-auto dark:bg-gray-900">
        <iframe
          src="https://app.formbricks.com/s/clzy2x60o0000m8ct2rbf09kc"
          frameBorder="0"
          className="absolute left-0 top-0 w-full h-full border-0 dark:bg-gray-800"
          title="Form"
        />
      </div>
      <h2>safwan</h2>
    </div>
  );
};

export default TemplateDetails;
