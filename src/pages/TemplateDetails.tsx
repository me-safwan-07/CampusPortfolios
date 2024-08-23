import React from 'react';
import { useParams } from 'react-router-dom';
import { templates } from '../data'; // Adjust path as necessary
// import { useTheme } from '../hooks/useTheme'; // Import the theme hook
import { BackButton } from '../components';

const TemplateDetails: React.FC = () => {
  const { templateSlug } = useParams<{ templateSlug: string }>();
  // const { theme } = useTheme(); // Get the theme value from the hook

  // Find the selected template based on the slug
  const template = templates.find(t => t.title.toLowerCase().replace(/\s+/g, '-') === templateSlug);

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen dark:bg-black dark:text-white">
      {/* Top Section for Mobile */}
      <div className="md:hidden">
        <BackButton />
      </div>

      <div className="flex flex-grow">
        {/* Sidebar Section for Desktop */}
        <div className="hidden md:flex md:fixed top-0 left-0 w-full md:w-2/5 h-screen px-4 py-6 border-r dark:border-gray-600 bg-white dark:bg-black">
          <BackButton />
          <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">{template.title}</h1>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{template.description}</p>
          <div className="flex flex-col space-y-4">
            <span className="bg-black dark:bg-gray-800 text-white text-center font-semibold py-2 px-4 rounded">
              {template.price}
            </span>
            <a
              href={template.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 hover:bg-gray-200 text-black text-center font-semibold py-2 px-4 rounded"
            >
              View Demo
            </a>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex-grow md:ml-2/5 w-full pt-2 md:pt-0">
          {/* Image Section for Mobile and Desktop */}
          <div className="relative w-full h-64 md:h-96">
            <img
              src={template.imageUrl}
              alt={template.title}
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
          {/* Title and Description Section */}
          <div className="p-4 md:p-6">
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{template.title}</h2>
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">{template.description}</p>
            <div className="flex flex-wrap space-x-4 space-y-2 md:space-y-0 mb-6">
              <a
                href={template.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-300 hover:bg-gray-200 text-black text-center font-semibold py-2 px-4 rounded"
              >
                View Demo
              </a>
              <span className="bg-black dark:bg-gray-800 text-white text-center font-semibold py-2 px-4 rounded">
                {template.price}
              </span>
            </div>
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">{template.about}</p>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg w-full max-w-md">
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                Like this template? Complete the form below, and we'll get in touch with you shortly.
              </h3>
              <div className="relative h-64 overflow-auto">
                <iframe
                  src="https://app.formbricks.com/s/clzy2x60o0000m8ct2rbf09kc"
                  frameBorder="0"
                  className="absolute left-0 top-0 w-full h-full border-0 rounded-lg"
                  title="Embedded Form"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;
