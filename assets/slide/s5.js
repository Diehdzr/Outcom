$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s5_01.svg', function () {

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
    $("#daclic1, #btn1, #btn1roll, #daclic, #playvideo").hide();

    setVideo(video, 'video_2_corte_c_comp');

    $("#video").on("ended", () => {
      document.fullscreenElement && exitFullscreen();
      $("#video").hide();
      $("#btn1, #adelante").attr('class', 'cursor').show();
      $("#daclic1").attr('class', 'infinite flash').show();
    });

    $("#btn1").on("click", (e) => {
      adelante(e);
    });

  });
});
