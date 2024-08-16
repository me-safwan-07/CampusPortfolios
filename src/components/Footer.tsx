import React from 'react';
import { useTheme } from '../hooks/useTheme'; // Import the useTheme hook

export const Footer: React.FC = () => {
  const { theme } = useTheme(); // Use the theme hook
  const footerClasses = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <footer className={`footer mt-0 py-6 ${footerClasses} border-t border-gray-200 dark:border-gray-700`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img 
              src={theme === 'dark' ? 'src/assets/dark.logo.svg' : 'src/assets/light.logo.svg'} 
              alt="Logo" 
              className="h-8"
            />
            <span className="text-xl font-bold">
              CAMPUS Portfolios
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            {['Template', 'about', 'contact'].map((item) => (
              <a 
                key={item} 
                href={`/${item}`} 
                className={`hover:text-gray-400 transition-colors duration-200 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="text-center mt-4">
          <a 
            href="/privacy-policy" 
            className={`hover:text-gray-400 transition-colors duration-200 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a 
            href="/terms-of-service" 
            className={`hover:text-gray-400 transition-colors duration-200 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-sm">
          <p>&copy; {new Date().getFullYear()} CAMPUS Portfolios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};