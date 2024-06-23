import React, { createContext, useContext, useEffect, useState } from 'react';
import MenuSvg from '../assets/svg/MenuSvg'

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
      // Check for the user's theme preference in localStorage
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme : 'light';
    });
  
    useEffect(() => {
      // Apply the theme class to the document element
      document.body.setAttribute('data-theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
      // Save the theme preference to localStorage
      localStorage.setItem('theme', theme);
    }, [theme]);
  

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
