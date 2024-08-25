import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Initialize theme state based on localStorage or default to 'dark'
  const [theme, setTheme] = useState<string>(() => {
    // Check localStorage for existing theme
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'dark'; // Default to 'dark' if no theme is stored
  });

  useEffect(() => {
    // Apply the theme to the document root element
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save the selected theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
