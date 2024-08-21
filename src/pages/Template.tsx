// import React from 'react';
import { FindTemplate, TemplateCard } from '../components';
import { templates } from "../data";
import { Sidebar } from '../components/Sidebar';

function Template() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 dark:bg-black dark:text-white">
      <FindTemplate />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar className="flex-shrink-0 md:w-1/4 lg:w-1/5 max-w-xs min-w-[200px]" />

        {/* Main content grid */}
        <div className="flex-1 grid grid-cols-1 s p-2 m:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-black">
          {templates.map(template => (
            <TemplateCard
              key={template.title}
              title={template.title}
              description={template.description}
              imageUrl={template.imageUrl}
              price={template.price}
              liveDemoUrl={template.liveDemoUrl}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Template;
