"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const LOCALSTORAGEPATH = 'themeContext';

type ThemeContext = {
  theme: string;
  setTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(LOCALSTORAGEPATH) || 'light'
  );

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add(theme);
    localStorage.setItem(LOCALSTORAGEPATH, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);