const video = document.querySelector('video');
const turnON = document.querySelector('.turn-on');
const turnOFF = document.querySelector('.turn-off');

const options = {
  video: true,
  audio: true
}

function ON() {
  if (navigator.webkitGetUserMedia !== null) {

    navigator.webkitGetUserMedia(options,
      (stream) => {
        video.srcObject = stream;
        video.play();
      },(e) => {
        console.error(`${e}`);
      }
    )
  }
}

function OFF() {
  navigator.webkitGetUserMedia(options, (stream) => {
    video.srcObject = null;
    video.stop();
  },(e) => {
    console.error(`${e}`);
  })
}

turnON.addEventListener('click', ON);
turnOFF.addEventListener('click', OFF);
