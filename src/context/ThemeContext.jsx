import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext(); // i can export this context so that i can use it while i want in other components

// but the best approch is to create a custom hooks that help me to access a context i have here

export function useThemeContext() {
  return useContext(ThemeContext);
}

// another
const ThemeUpdateContext = createContext();

export function useThemeUpdateContext() {
  return useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
