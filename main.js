const video = document.querySelector('video');
const turnON = document.querySelector('.turn-on');

function TurnWebCam() {
  if (navigator.webkitGetUserMedia !== null) {

    const options = {
      video: true,
      audio: true
    }

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

turnON.addEventListener('click', TurnWebCam);
