import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Theme } from "./context";

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById("root")
);
