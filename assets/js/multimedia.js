//Ponerle cursor a los botones de la pleca
const cursorPleca = () => {
  $("#pausa").hide();
  $("#atras, #refresh").attr('class','cursor');
  $("#adelante, #play").attr('class','clickDisabled');
};

/*=================================================================================================================*/

//Crea una etiqueta de audio "const audio = createAudio();"
const createAudio = () => {
  const audio = document.createElement('audio');
  audio.id = 'audio';
  document.getElementById('loadSvg').appendChild(audio);
  return audio;
};

//Crea etiqueta de video "const video =  createVideo();"
const createVideo = (controls = false) => {
  const video = document.createElement('video');
  video.id = 'video';
  controls ? video.controls = true : video.controls = false;
  video.controlsList = "nodownload";
  video.playsInline = true;
  document.getElementById('loadSvg').appendChild(video);
  return video;
};

/*=====================================================================================================================*/
//Funciones para pausar y reproducir video
const addVideoPauseAndPlay = (video) => {
  video.addEventListener('play', () => {
    $("#pausa").attr('class', 'cursor').show();
    $("#play").hide();
  });
  video.addEventListener('pause', () => {
    $("#pausa").hide();
    $("#play").attr('class', 'cursor').show();
  });

  $("#play").on("click", () => {
    video.play();
  });

  $("#pausa").on("click", () => {
    video.pause();
  });

  $("#video").on("ended", () => {
    $("#pausa").hide();
    $("#play").attr('class','clickDisabled').show();
  });

};

//funcione para reproducir video
const setVideo = ( video, videoName ) => {//setVideo( video, "nombre");
  $('#video').attr('src', "assets/video/" + videoName + ".mp4");
  video.load();
  $('#video').show();
  video.play();
  addVideoPauseAndPlay(video);
};
/*---------------------------------------------------------------------------------------------------------------------*/

//Funciones para pausar y reproducir audio
const addAudioPauseAndPlay = (audio, type = 0) => {
  if(type === 0){
    audio.addEventListener('play', () => {
      $("#pausa").attr('class', 'cursor').show();
      $("#play").hide();
    });
    audio.addEventListener('pause', () => {
      $("#pausa").hide();
      $("#play").attr('class', 'cursor').show();
    });

    $("#play").on("click", () => {
      audio.play();
    });

    $("#pausa").on("click", () => {
      audio.pause();
    });

    $("#audio").on("ended", () => {
      $("#pausa").hide();
      $("#play").attr('class','clickDisabled').show();
    });
  }
};

//funcione para reproducir audio
const setAudio = ( audio, audioName, type = 0 ) => {//setAudio( audio, "nombre");
  $('#audio').attr('src', "assets/audio/" + audioName + ".mp3");
  audio.load();
  audio.play();
  addAudioPauseAndPlay(audio, type);
};

/*====================================================================================================================*/

//funciones resizer "resize( video );" o "$(window).resize(() => { resize( video );}); para ejecutar automaticamente"
const getSize = () => {
  const videoContainer = document.getElementById('recvideo');
  let domRectVideo = videoContainer.getBoundingClientRect();

  domRectVideo = videoContainer.getBoundingClientRect();
  const videoHeight = domRectVideo.height;
  const videoWidth = domRectVideo.width;
  const videoX = domRectVideo.x;
  const videoY = domRectVideo.y;

  return { videoHeight, videoWidth, videoX, videoY };
};

const resize = (video) => {
  const { videoHeight, videoWidth, videoX, videoY } = getSize();
  video.style.height = `${videoHeight}px`;
  video.style.width = `${videoWidth}px`;
  video.style.left = `${videoX}px`;
  video.style.top = `${videoY}px`;
};
/*======================================================================================================================*/

//Salir de pantalla completa "document.fullscreenElement && exitFullscreen();" ejecutar con esta linea
const exitFullscreen = () => {//exitFullscreen();
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};

//entrar en pantalla completa
const fullscreen = () => {//fullscreen();
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
};

/*=========================================================================================================================*/
//Descarga de PDFs
const downloadPDF = ( pdfName, blank = false) => {//funcion para descargar archivos pdf "downloadPDF('INN_1_Resumen', true);"
  if (blank) {//Si resive un segundo parametro abre el archivo en una nueva pestaña
    const link = document.createElement('a');
    link.href = `assets/pdf/${pdfName}.pdf`;
    link.target = '_blank';
    link.click();
  } else {//Si no recibe segundo parametro se descargara
    const link = document.createElement('a');
    link.href = `assets/pdf/${pdfName}.pdf`;
    link.download = `${pdfName}.pdf`;
    link.click();
  }
};

