import React from "react";
import "./bass.css";

let Bass = () => {
  function playSound() {
    alert("Test");
  }
  return (
    <div>
      <button onClick={playSound}>One</button>
      <button>Two</button>
      <button>Three</button>
      <button>Four</button>
      <button>Five</button>
      <button>Six</button>
      <button>Seven</button>
      <button>Eight</button>
    </div>
  );
};

export default Bass;
