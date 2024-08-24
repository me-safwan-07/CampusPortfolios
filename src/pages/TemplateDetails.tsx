import React from 'react';
import { useParams } from 'react-router-dom';
import { templates } from '../data'; // Adjust path as necessary
// import { useTheme } from '../hooks/useTheme'; // Import the theme hook
import { BackButton } from '../components';
import { FaEye } from "react-icons/fa";

const TemplateDetails: React.FC = () => {
  const { templateSlug } = useParams<{ templateSlug: string }>();
  // const { theme } = useTheme(); // Get the theme value from the hook

  // Find the selected template based on the slug
  const template = templates.find(t => t.title.toLowerCase().replace(/\s+/g, '-') === templateSlug);

  if (!template) {
    return <div className="p-4">Template not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen dark:bg-black dark:text-white md:flex-row">
      {/* Sidebar Section */}
      <div className="w-full md:w-1/3 border-r border-r-gray-800 m-10 p-8 md:m-18 md:p-20">
        <BackButton />
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black dark:text-white">{template.title}</h1>
        <p className="text-base md:text-xl mb-6 text-gray-700 dark:text-gray-300">{template.description}</p>
        <div className="flex flex-row w-full md:w-full justify-around items-center gap-6 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <span className="bg-black dark:bg-white dark:text-black text-white border flex flex-grow justify-center items-center text-center font-semibold py-2 px-4 rounded">
            {template.price}
          </span>
          <a
            href={template.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black dark:text-white dark:bg-black rounded flex justify-center items-center flex-grow border border-gray-300 hover:bg-gray-100 text-center font-semibold py-2 px-4 rounded"
          >
            <FaEye className='m-1 h-4 w-6'/>
            View Demo
          </a>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full md:w-2/3 pt-12 md:mt-6 px-5 ">
        <img
          src={template.imageUrl}
          alt={template.title}
          className="w-full h-auto md:h-auto object-cover rounded shadow-md mb-6"
        />
        <h2 className="text-xl md:text-3xl font-bold mb-2 text-black dark:text-white">{template.title}</h2>
        <ul className="text-base md:text-xl text-black dark:text-white list-disc list-inside mb-4">
          {template.about.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
        <div className="bg-gray-100 dark:bg-gray-900 flex justify-center h-auto p-4 md:p-2 md:w-2/3 lg:p-4 rounded-lg shadow-md">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Like this template? Complete the form below, and we'll get in touch with you shortly.
          </h3>
          <div className="relative h-64 overflow-hidden rounded-lg">
            <iframe
              src="https://app.formbricks.com/s/clzy2x60o0000m8ct2rbf09kc"
              frameBorder="0"
              className="absolute inset-0 w-full h-full border-0"
              title="Embedded Form"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TemplateDetails;
