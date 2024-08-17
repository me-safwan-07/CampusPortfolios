import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Get the theme from localStorage or default to light
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Update the HTML class for dark mode and save to localStorage
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save the theme in localStorage so it persists after refresh
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle function to switch between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
