import React from "react";
import "./bass.css";

let Bass = () => {
  // variables
  let sound1 = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  let sound2 = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  let sound3 = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  let sound4 = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  let sound5 = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  let sound6 = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  let sound7 = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  let sound8 = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  // events
  document.addEventListener("keydown", handleKeyDown);
  // functions
  function playSound1() {
    sound1.play();
  }
  function playSound2() {
    sound2.play();
  }
  function playSound3() {
    sound3.play();
  }
  function playSound4() {
    sound4.play();
  }
  function playSound5() {
    sound5.play();
  }
  function playSound6() {
    sound6.play();
  }
  function playSound7() {
    sound7.play();
  }
  function playSound8() {
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
    <div>
      <div onClick={playSound1}>
        One
        <audio id="sound1"></audio>
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
