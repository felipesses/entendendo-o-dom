// get all keys

const keys = document.querySelectorAll(".key");

// playing notes

function playNote(event) {
  // keyCode
  let audioKeyCode = getKeyCode(event);

  // typed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  const cantFoundKey = !key;

  // if key exists
  if (cantFoundKey) return;

  addPlayingClass(key);
  playAudio(audioKeyCode);
}

function getKeyCode(event) {
  let keyCode;
  const isKeyboard = event.type === "keydown";

  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }

  return keyCode;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);

  audio.currentTime = 0;
  audio.play();
}

function addPlayingClass(key) {
  key.classList.add("playing");
}

function removePlayingClass(event) {
  event.target.classList.remove("playing");
}

function registerEvents() {
  // mouse clicking

  keys.forEach((key) => {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
  });

  // keyboard typing

  window.addEventListener("keydown", playNote);
}

window.addEventListener("load", registerEvents);
