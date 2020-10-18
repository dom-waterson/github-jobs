import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Job, Home } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/job">
          <Job />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
