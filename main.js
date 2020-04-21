const video = document.querySelector('video');
const btn = document.querySelector('.save');
const canvas = document.querySelector('canvas');
const photo = document.querySelector('#photo');


if (navigator.webkitGetUserMedia !== null) {
  const options = {
    video: true,
    audio: true
  }

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

// function createDownloadLink(blob) {
//   const url = URL.createObjectURL(blob);
//   const filename = new Date().toISOString();

//   const xhr = XMLHttpRequest();
  
//   xhr.onload((e) => {
//     if (this.readyState === 4) {
//       console.log("Server returned: ", e.target.responseText);
//     }
//   })

//   const fd = new FormData();
//   fd.append('audio_data', blob, filename);
//   xhr.open('POST', 'upload.php', true);
//   xhr.send(fd);

//   window.setTimeout(() => {
//     startRecording
//   }, 300)
// }