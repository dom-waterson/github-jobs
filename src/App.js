import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./theme-styles";
import { GlobalStyles } from "./global-styles";
import { Header } from "./components";
import JobCardsContainer from "./containers/job-cards";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <JobCardsContainer />
    </ThemeProvider>
  );
}

export default App;
