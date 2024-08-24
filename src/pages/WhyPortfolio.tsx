import React from 'react';

const WhyPortfolioPage: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-black dark:text-white min-h-screen pt-16">
      <div className="max-w-4xl mx-auto bg-white dark:bg-black dark:text-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Portfolio?</h1>
        <p className=" mb-4">
          In today’s competitive job market, having a well-crafted portfolio is more than just a good idea—it’s <span className="font-bold text-blue-600">essential</span>. Whether you're a student seeking internships, a recent graduate looking for full-time opportunities, or even someone switching careers, a portfolio gives you the chance to present your skills, experiences, and accomplishments in a way that goes beyond a traditional resume.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white ">Here’s Why a Portfolio is Important:</h2>
        
        <ul className="list-disc list-inside  space-y-3">
          <li>
            <strong className="text-indigo-600">Showcase Your Skills:</strong> A portfolio allows you to provide concrete examples of your abilities. Instead of just telling employers about your skills, you can <span className="font-bold text-green-600">show</span> them through projects, case studies, or work samples.
          </li>
          <li>
            <strong className="text-indigo-600">Stand Out from the Crowd:</strong> With so many candidates vying for the same positions, a portfolio helps you <span className="font-bold text-green-600">stand out</span>. A well-designed portfolio can leave a lasting impression that a resume alone cannot.
          </li>
          <li>
            <strong className="text-indigo-600">Demonstrate Your Professionalism:</strong> A portfolio signals that you are <span className="font-bold text-green-600">serious</span> about your career and invested in your personal brand.
          </li>
          <li>
            <strong className="text-indigo-600">Highlight Your Growth:</strong> A portfolio isn’t just a collection of your best work—it’s also a timeline of your progress. Employers love seeing <span className="font-bold text-green-600">how your skills have evolved</span> over time.
          </li>
          <li>
            <strong className="text-indigo-600">Personalized Storytelling:</strong> A portfolio gives you the freedom to tell your story in a <span className="font-bold text-green-600">personalized</span> way, reflecting your personality, values, and career goals.
          </li>
          <li>
            <strong className="text-indigo-600">Ready for Any Opportunity:</strong> Whether you're applying for jobs, attending networking events, or meeting potential clients, having a portfolio means you're always <span className="font-bold text-green-600">ready</span> to share your work.
          </li>
        </ul>

        <p className="text-gray-700 dark:text-white mt-6">
          In an age where first impressions are often made online, a portfolio gives you the chance to <span className="font-bold text-blue-600">make your mark</span>. It’s your personal space to showcase your talents, document your journey, and make a statement about your future.
        </p>

        <p className="text-gray-700 dark:text-white mt-4">
          Don’t miss out on opportunities—start building your portfolio with <span className="font-bold text-indigo-600">Campus Portfolios</span> today and <span className="font-bold text-green-600">set yourself apart</span>!
        </p>
      </div>
    </div>
  );
};

export default WhyPortfolioPage;
