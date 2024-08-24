import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen pt-14 pb-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-black dark:text-gray-200 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">About Campus Portfolios</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Welcome to <strong className="text-blue-500">Campus Portfolios</strong>, your one-stop solution for creating professional and personalized student portfolios. We understand that every student is unique, and so are their career goals. That's why we offer a range of customizable portfolio templates tailored to showcase your academic achievements, skills, and personal brand.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Our mission is to empower students from various fields, including IT and non-IT backgrounds, to stand out in their job search with visually appealing and professionally designed portfolios. Whether you're pursuing a career in technology, business, or the arts, Campus Portfolios provides a platform to highlight your strengths and make a lasting impression on potential employers.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">What We Offer:</h2>
        <ul className="list-disc list-inside mb-6 space-y-4">
          <li>
            <strong className="text-gray-800 dark:text-gray-200">Customizable Templates:</strong> Choose from a variety of sleek, modern portfolio templates designed to suit different career paths and preferences.
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">Live Demo Previews:</strong> Get a live preview of each template to ensure it aligns with your vision before making a choice.
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">Easy-to-Use Design:</strong> Our user-friendly interface allows you to personalize your portfolio with ease, adding details like skills, experiences, projects, and more.
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">Affordable Pricing:</strong> We offer flexible pricing options, with base packages starting at ₹499, ensuring that you get a professional portfolio without breaking the bank.
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">Support Across Fields:</strong> Whether you're an IT student, a business major, or pursuing any other degree, we provide templates that cater to your specific needs.
          </li>
        </ul>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          At Campus Portfolios, we believe that a strong digital presence is key to your professional growth. Let us help you build a portfolio that not only highlights your skills and achievements but also reflects your unique identity.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          Explore our templates today and take the first step towards a successful career!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
