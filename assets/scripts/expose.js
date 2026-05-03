// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const audioObject = document.getElementsByTagName("audio")[0];
  const hornImg = document.getElementsByTagName("img")[0];
  const hornSelect = document.getElementById("horn-select");
  const volumeImg = document.getElementsByTagName("img")[1];
  const volumeSlider = document.getElementById("volume");
  const playButton = document.getElementsByTagName("button")[0];
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", selectHorn);
  volumeSlider.addEventListener("input", setVolume);
  playButton.addEventListener("click", (event) => {
    if (hornSelect.value == "select") {
      return;
    }
    audioObject.play();
    if (hornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  setVolume();
  
  function selectHorn() {
    audioObject.src = "./assets/audio/" + hornSelect.value + ".mp3";
    hornImg.src = "./assets/images/" + hornSelect.value + ".svg";
  }

  function setVolume() {
    let level;
    if (volumeSlider.valueAsNumber == 0) {
      level = 0;
    } else if (volumeSlider.valueAsNumber < 33) {
      level = 1;
    } else if (volumeSlider.valueAsNumber < 67) {
      level = 2;
    } else {
      level = 3;
    }
    volumeImg.src = "./assets/icons/volume-level-" + level + ".svg";
    audioObject.volume = volumeSlider.valueAsNumber / 100;
  }
}