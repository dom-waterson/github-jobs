import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./containers";

import { Job, Home } from "./pages";

function App() {
  return (
    <Router>
      <Header />
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
