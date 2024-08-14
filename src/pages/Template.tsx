import React from 'react';
import { FindTemplate, TemplateCard } from '../components';
import { templates } from "../data";

function Template() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <FindTemplate />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  );
}

export default Template;
