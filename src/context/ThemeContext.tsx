import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'obsidian' | 'deepblue' | 'aurora' | 'light';

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'obsidian',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('yourtech_theme') as ThemeType;
    return saved && ['obsidian', 'deepblue', 'aurora', 'light'].includes(saved)
      ? saved
      : 'obsidian';
  });

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem('yourtech_theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-obsidian', 'theme-deepblue', 'theme-aurora', 'theme-light');
    root.classList.add(`theme-${theme}`);

    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
