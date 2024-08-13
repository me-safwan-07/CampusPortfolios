// src/components/MainContent.tsx

import React, { useState } from 'react';
import TemplateCard from '../Components/TemplateCard';
import { templates } from '../data/templates';
import FilterSidebar from '../Components/FilterSidebar';

const Home: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['all']);

  const filteredTemplates = selectedFilters.includes('all')
    ? templates
    : templates.filter(template => selectedFilters.includes(template.category));
  return (
    <div className="ml-1/4 p-6">
      <FilterSidebar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <div className="w-3/4 p-6"></div>
      <h2 className="text-3xl font-bold text-white mb-6">Next.js starter templates and themes</h2>
      <p className="text-gray-400 mb-10">Discover Next.js templates, starters, and themes to jumpstart your application or website build.</p>
      <div className="grid grid-cols-3 gap-6">
        {templates.map(template => (
          <TemplateCard
            key={template.title}
            title={template.title}
            description={template.description}
            author={template.author}
            imageUrl={template.imageUrl}
            price={template.price}
            liveDemoUrl={template.liveDemoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
