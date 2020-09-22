import React from "react";
import "./App.css";

// Components
import Bass from "./components/bass.js";
import Nav from "./components/nav.js";

function App() {
  return (
    <div className="App">
      <h1>Drum Pad</h1>
      <Nav />
      <Bass />
    </div>
  );
}

export default App;
