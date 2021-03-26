import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home"
import Help from "./Help"
import Pizza from"./Pizza"
import Done from"./done"
const App = () => {
  return (
      <div className="App">
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
      <Switch>
        
        <Route path="/Pizza">
          <Pizza />
        </Route>
        <Route path="/done">
          <Done />
        </Route>
        
        <Route path="/Help">
          <Help />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
      
  );
};
export default App;
