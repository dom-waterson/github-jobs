import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "./theme-styles";
import { GlobalStyles } from "./global-styles";

// TODO add state to toggle dark/light theme

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <h1>Github Jobs</h1>
    </ThemeProvider>
  );
}

export default App;
