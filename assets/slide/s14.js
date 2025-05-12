$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s14_01.svg', function () {

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
    $("#daclic1, #btn1, #btn1roll, #banderaclic, #playvideo, #daclic").hide();

    setVideo( video , 'video_3_comp' );

    $("#video").on("ended", () => {
      document.fullscreenElement && exitFullscreen();
      $("video").hide();
      $("#adelante").attr('class', 'cursor').show();
      $("#banderaclic").attr('class', 'infinite flash').show();
    });

  });
});
