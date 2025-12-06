import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isMoonlight, setIsMoonlight] = useState(false);

  const toggleTheme = () => {
    setIsMoonlight((prev) => !prev);
    document.body.classList.toggle('moonlight-mode');
  };

  return (
    <ThemeContext.Provider value={{ isMoonlight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
