if (navigator.webkitGetUserMedia !== null) {
  const options = {
    video: true,
    audio: true
  }

  const video = document.querySelector('video');

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