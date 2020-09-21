import React from "react";
import "./bass.css";

let Bass = () => {
  // variables
  let sound1 = new Audio(
    "https://www.soundsnap.com/streamers/play.php?id=1600722510.1171:81396bbcf9a8cb6daa1697857356e9ee8871ce4b:cd9c03d1d835a27942cd380d2582b29e0acbbb4f61d5f2b3bf4349c857e3e32a4214df5efb39cc0bccf02f63ac920b211e022e480d568eb6de2f1c83fd84a9721b8e0ac5a68dedde0743ead5a057f1078c4f60c9ab3546d184549604d054cf82da809b363fdc1cdf0079de967841f0b0577198ae5a387f971d11455264aa17ef43b295435ab8d608abade496ef9beec5425dc8d1c8f73348d3206660fff60f89160fa959412888fe9606169cbace6eb5cdc11558ae25bd154f4cf4888cb6b6f88f4a8f0d0a51c501ca9e2cb931fbbdf995304316ac0725e3d1b10a894cc6b3e01e8439cc877ad71d4d49a241ecb7bc2fff7ff45104e3f0e2c09e683c73930eca11814748c02c115233a0085c2887c8b2c9360880d43280e8d87ade14a202f34c"
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
    sound1.pause();
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
    <div className="sound-container">
      <div onClick={playSound1}>
        A<audio id="sound1"></audio>
      </div>
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
