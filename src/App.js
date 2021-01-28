import React from "react";
import { Route, route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Clock from "./components/Clock/Clock";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/navigation/Navigation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route
        exact
        path="/"
        render={(props) => <Welcome {...props} name="Greg" />}
      />
      <Route path="/Clock" component={Clock} />
      <Route path="/Contact" component={Contact} />
    </div>
  );
}

export default App;
