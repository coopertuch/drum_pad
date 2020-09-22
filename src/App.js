import React from "react";
import "./App.css";

// Components
import PackOne from "./components/PackOne.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      <h1>Drum Pad</h1>
      <Nav />
      <PackOne />
    </div>
  );
}

export default App;
