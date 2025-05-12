$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s15_01.svg', function () {

    let videoTurn = 0;
    const videoViwed = [];

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
    $("#txt3, #txt4, #txt5, #daclic1, #btn1, #btn1roll, #daclic2, #btn2, #btn2roll, #daclic3, #btn3, #btn3roll, #daclic4, #btn4, #btn4roll, #playvideo, #daclic").hide();

    setVideo( video , 'video_4_comp' );

    $("#video").on("ended", () => {
      document.fullscreenElement && exitFullscreen();
      $("video").hide();
      if(videoTurn === 0){
        $("#btn1").attr('class', 'cursor').show();
        $("#btn2, #btn3").attr('class', 'clickDisabled').show();
        $("#daclic1").attr('class', 'infinite flash').show();
      } else if (videoTurn === 1){
        $("#btn1roll, #btn2").attr('class', 'cursor').show();
        $("#btn3").attr('class', 'clickDisabled').show();
        $("#daclic2").attr('class', 'infinite flash').show(); 
      } else if (videoTurn === 2){
        $("#btn1roll, #btn2roll, #btn3").attr('class', 'cursor').show();
        $("#daclic3").attr('class', 'infinite flash').show(); 
      } else {
        $(`[id^=txt]`).hide();
        $("#btn4").attr('class', 'cursor').show();
        $("#daclic4").attr('class', 'infinite flash').show();
      }
    });

    $("[id^=btn]").on("click", (e) => {
      const id = (e.currentTarget.id).slice(3, 4) * 1;

      if(id < 4){
        $(`[id^=btn], [id^=daclic], [id^=txt]`).hide();
        $(`#txt${id + 2}, #txt2`).show();
  
        if(!videoViwed.includes(id)){
          videoViwed.push(id);
          videoTurn++;
        }
  
        if(videoViwed.length === 3){
          videoTurn = 3;
        }

        setVideo( video , `video_${id + 4}_comp` );
      }
     
      
    });//Funcion para boton 1

    $("#btn4").on("click", (e) => {
      adelante(e);
    });

  });
});
