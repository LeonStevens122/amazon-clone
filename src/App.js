import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Styling

import "./App.css";

// Import Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Chekout from "./components/Checkout/Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Chekout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
