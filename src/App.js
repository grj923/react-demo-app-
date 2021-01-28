import React from "react";
import { Route, route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Welcome from "./components/Welcome/Welcome";
import Clock from "./components/Clock/Clock";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/navigation/Navigation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Greg" />}
        />
        <Route path="/Welcome/:name" component={Welcome} />
        <Route path="/Clock" component={Clock} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
