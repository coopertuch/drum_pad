import React from "react";
import "./bass.css";

let Bass = () => {
  function componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }
  // functions
  function playSound() {
    alert("Test");
  }
  function handleKeyDown(event) {
    if (event.key === "a") {
      playSound();
    }
  }
  // body
  return (
    <div onLoad={componentDidMount}>
      <button onClick={playSound} onKeyDown={handleKeyDown}>
        One
      </button>
      <button onClick={playSound}>Two</button>
      <button onClick={playSound}>Three</button>
      <button onClick={playSound}>Four</button>
      <button onClick={playSound}>Five</button>
      <button onClick={playSound}>Six</button>
      <button onClick={playSound}>Seven</button>
      <button onClick={playSound}>Eight</button>
    </div>
  );
};

export default Bass;
