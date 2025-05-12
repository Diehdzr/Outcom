$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s21_01.svg', function () {

    
    //Genera etiqueta de audio y video con el id que se manda en la funcion
    const video = createVideo(); 
    
    //ajustar tamaño de video automaticamente
    $(window).resize(() => {
      resize(video);
    });

    //ajustar tamaño de video por primera vez
    resize(video);

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    setVideo( video , 'video_9_comp' );

    $("#video").on("ended", () => {
      document.fullscreenElement && exitFullscreen();
      adelante();
    });

  });
});
