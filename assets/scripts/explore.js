// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const textArea = document.getElementById("text-to-speak");
  const talkButton = document.getElementsByTagName("button")[0];
  const face = document.getElementsByTagName("img")[0];
  let voices = [];

  synth.addEventListener("voiceschanged", () => {
    voices = synth.getVoices();
    for (const voice of voices) {
      const voiceOption = new Option(voice.name, voice.voiceURI);
      voiceSelect.add(voiceOption);
    }
  });

  talkButton.addEventListener("click", (event) => {
    if (voiceSelect.value == "select") {
      return;
    }
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    for (const voice of voices) {
      if (voice.voiceURI == voiceSelect.value) {
        utterThis.voice = voice;
      }
    }

    utterThis.addEventListener("start", () => {
      face.src = "./assets/images/smiling-open.png";
    });
    
    utterThis.addEventListener("end", () => {
      face.src = "./assets/images/smiling.png";
    });

    synth.speak(utterThis);
  });
}