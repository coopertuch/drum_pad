import React from "react";
import "./bass.css";
import "./sounds/kit1";

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
      <div onClick={playSound1}>
        One
        <audio ref="audio_tag" src="./sounds/kit1/kick.wav" autoPlay></audio>
      </div>
      <div onClick={playSound2}>Two</div>
      <div onClick={playSound3}>Three</div>
      <div onClick={playSound4}>Four</div>
      <div onClick={playSound5}>Five</div>
      <div onClick={playSound6}>Six</div>
      <div onClick={playSound7}>Seven</div>
      <div onClick={playSound8}>Eight</div>
    </div>
  );
};

export default Bass;
