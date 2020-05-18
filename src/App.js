import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    // replace the contents of the App component with a simple <Switch>...</Switch> structure
    <div className="App">
      <Switch>
        {/* more pages to be added here later */}
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
