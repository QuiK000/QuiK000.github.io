const video = document.querySelector('video');
const turnON = document.querySelector('.turn-on');
const turnOFF = document.querySelector('.turn-off');

var options = {
  video: true,
  audio: true
}

function ON() {
  if (navigator.webkitGetUserMedia !== null) {
    options.audio.muted = true;

    navigator.webkitGetUserMedia(options,
      (stream) => {
        video.srcObject = stream;
        video.play();
      },
      (e) => {
        console.error(`${e}`);
      }
    )
  }
}

function OFF() {
  options = {
    video: false,
    audio: false
  };
}

turnON.addEventListener('click', ON);
turnOFF.addEventListener('click', OFF);