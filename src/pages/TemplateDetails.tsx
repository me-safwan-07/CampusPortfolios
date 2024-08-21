import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { templates } from '../data'; // Adjust path as necessary
import { useTheme } from '../hooks/useTheme'; // Import the theme hook
import { BackButton } from '../components';

const TemplateDetails: React.FC = () => {
  const { templateSlug } = useParams<{ templateSlug: string }>();
  const { theme } = useTheme(); // Get the theme value from the hook
  const navigate = useNavigate(); // Hook for navigation

  // Find the selected template based on the slug
  const template = templates.find(t => t.title.toLowerCase().replace(/\s+/g, '-') === templateSlug);

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <div className={`flex flex-col md:flex-row min-h-screen dark:bg-black text-white bg-white text-black dark:text-white`}>
      {/* Sidebar Section */}
      <div className={`md:w-1/3 p-6 border-b md:border-r ${theme === 'dark' ? 'border-black-700' : 'border-black-200'}`}>
        <BackButton />
        <button
          onClick={() => navigate(-1)}
          className={`text-sm ${theme === 'dark' ? 'text-black-400 hover:text-white' : 'text-black-600 hover:text-black'} mb-4`}
        >
          &lt; Back to Templates
        </button>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{template.title}</h1>
        <p className="text-base md:text-lg mb-4">{template.description}</p>

        {/* <div className="space-y-2 mb-6">
          <div>
            <p className={theme === 'dark' ? 'text-black-400' : 'text-black-600'}>Framework</p>
            <p className="font-bold">Next.js</p>
          </div>
          <div>
            <p className={theme === 'dark' ? 'text-black-400' : 'text-black-600'}>Use Case</p>
            <p className="font-bold">Starter</p>
          </div>
          <div>
            <p className={theme === 'dark' ? 'text-black-400' : 'text-black-600'}>CSS</p>
            <p className="font-bold">CSS Modules</p>
          </div>
        </div> */}

        <div className="flex flex-wrap space-x-4 space-y-2 md:space-y-0">
          <span className={`bg-black-800 hover:bg-black-700 text-white font-bold py-2 px-4 rounded`}>
            {template.price}
          </span>
          <a
            href={template.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            View Demo
          </a>
        </div>
      </div>

      {/* Preview Section */}
      <div className="md:w-2/3 p-6">
        <img
          src={template.imageUrl}
          alt={template.title}
          className="w-full h-72 md:h-96 object-cover mb-6"
        />
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
          This is a <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Next.js</span> project bootstrapped with <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>create-next-app</span>.
        </p>

        <div>
          <h2 className="text-lg md:text-xl font-bold mb-4">Getting Started</h2>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 text-sm md:text-base">
            <code>
              {`1. npm run dev
2. yarn dev
3. pnpm dev
4. bun dev`}
            </code>
          </pre>
          <h2>Apply Portfolio </h2>
          <div className="relative h-[50dvh] overflow-auto">
            <iframe
              src="https://app.formbricks.com/s/clzy2x60o0000m8ct2rbf09kc"
              frameBorder="0"
              className="absolute left-0 top-0 w-full h-full border-0"
              title="Embedded Form"
            ></iframe>
          </div>
          <p>Open <a href="http://localhost:3000" className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>http://localhost:3000</a> with your browser to see the result.</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;
