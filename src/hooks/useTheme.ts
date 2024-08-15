import { useState, useEffect } from 'react';

export function useTheme() {
  // Initialize the theme from local storage or default to 'light'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? (savedTheme as 'light' | 'dark') : 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Apply theme class to the body
    document.body.classList.toggle('dark', theme === 'dark');

    // Save the theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggleTheme };
}
