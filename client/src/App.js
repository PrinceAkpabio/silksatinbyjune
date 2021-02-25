import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home_page";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
