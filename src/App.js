import React from "react";
// import Styling

import "./App.css";

// Import Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    // BEM
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
