import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "./theme-styles";
import { GlobalStyles } from "./global-styles";
import { Header } from "./components";

// TODO add state to toggle dark/light theme

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
