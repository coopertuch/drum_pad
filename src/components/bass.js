import React from "react";
import "./bass.css";

let Bass = () => {
  // variables
  // events
  document.addEventListener("keydown", handleKeyDown);
  // functions
  function playSound1() {
    console.log("Played 1");
  }
  function playSound2() {
    console.log("Played 2");
  }
  function playSound3() {
    console.log("Played 3");
  }
  function playSound4() {
    console.log("Played 4");
  }
  function playSound5() {
    console.log("Played 5");
  }
  function playSound6() {
    console.log("Played 6");
  }
  function playSound7() {
    console.log("Played 7");
  }
  function playSound8() {
    console.log("Played 8");
  }
  function handleKeyDown(e) {
    if (e.key === "a") {
      playSound1();
    } else if (e.key === "s") {
      playSound2();
    } else if (e.key === "d") {
      playSound3();
    } else if (e.key === "f") {
      playSound4();
    } else if (e.key === "g") {
      playSound5();
    } else if (e.key === "h") {
      playSound6();
    } else if (e.key === "j") {
      playSound7();
    } else if (e.key === "k") {
      playSound8();
    }
  }
  // body
  return (
    <div>
      <button onClick={playSound1}>One</button>
      <button onClick={playSound2}>Two</button>
      <button onClick={playSound3}>Three</button>
      <button onClick={playSound4}>Four</button>
      <button onClick={playSound5}>Five</button>
      <button onClick={playSound6}>Six</button>
      <button onClick={playSound7}>Seven</button>
      <button onClick={playSound8}>Eight</button>
    </div>
  );
};

export default Bass;
