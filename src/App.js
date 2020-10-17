import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "./theme-styles";
import { GlobalStyles } from "./global-styles";
import { Header } from "./components";
import JobCardsContainer from "./containers/job-cards";

// TODO add state to toggle dark/light theme

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      <JobCardsContainer />
    </ThemeProvider>
  );
}

export default App;
