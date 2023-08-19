"use client";
import { createContext, useContext, useEffect, useMemo } from "react";
import { useLocalStorage } from "react-use";

const ThemeContext = createContext({});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [colorMode, setColorMode] = useLocalStorage("theme", "dark");

  useEffect(() => {
    document.body.classList.toggle("sala-dark-scheme", colorMode === "dark");
  }, []);

  const handleChangeTheme = (theme) => {
    document.body.classList.toggle("sala-dark-scheme", theme === "dark");
    setColorMode(theme);
  };

  const value = useMemo(() => {
    return {
      handleChangeTheme,
      colorMode,
      setColorMode,
    };
  }, [handleChangeTheme, colorMode, setColorMode]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
