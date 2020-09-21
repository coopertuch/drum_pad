import React from "react";
import "./bass.css";

import kick from "./sounds/kick.wav";
import snare from "./sounds/snare.wav";
import hihat from "./sounds/hihat.wav";
import sticksnare from "./sounds/sticksnare.wav";
import tom1 from "./sounds/tom1.wav";
import tom2 from "./sounds/tom2.wav";
import clap from "./sounds/clap.wav";
import cymbal from "./sounds/cymbal.wav";

let Bass = () => {
  // events
  document.addEventListener("keydown", handleKeyDown);
  // variables
  let sound1 = new Audio(kick);
  let sound2 = new Audio(snare);
  let sound3 = new Audio(hihat);
  let sound4 = new Audio(sticksnare);
  let sound5 = new Audio(tom1);
  let sound6 = new Audio(tom2);
  let sound7 = new Audio(clap);
  let sound8 = new Audio(cymbal);
  // functions
  function playSound1() {
    sound1.currentTime = 0;
    sound1.play();
  }
  function playSound2() {
    sound2.currentTime = 0;
    sound2.play();
  }
  function playSound3() {
    sound3.currentTime = 0;
    sound3.play();
  }
  function playSound4() {
    sound4.currentTime = 0;
    sound4.play();
  }
  function playSound5() {
    sound5.currentTime = 0;
    sound5.play();
  }
  function playSound6() {
    sound6.currentTime = 0;
    sound6.play();
  }
  function playSound7() {
    sound7.currentTime = 0;
    sound7.play();
  }
  function playSound8() {
    sound8.currentTime = 0;
    sound8.play();
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
    <div className="sound-container">
      <div onClick={playSound1}>A</div>
      <div onClick={playSound2}>S</div>
      <div onClick={playSound3}>D</div>
      <div onClick={playSound4}>F</div>
      <div onClick={playSound5}>G</div>
      <div onClick={playSound6}>H</div>
      <div onClick={playSound7}>J</div>
      <div onClick={playSound8}>K</div>
    </div>
  );
};

export default Bass;
