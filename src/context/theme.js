import { createContext } from "react";
import React from "react";
import { ThemeProvider } from "styled-components";

import { useDarkMode } from "../hooks";
import { GlobalStyles } from "../global-styles";
import { themes } from "../theme-styles";

const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { Theme, ThemeContext };
