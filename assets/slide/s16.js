$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s16_01.svg', function () {

    let audioTurn = 0;
    const videoViwed = [];

    //Genera etiqueta de audio y video con el id que se manda en la funcion
    const audio = createAudio('audio');

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca
    $("[id^=pop], [id^=daclic], #banderaclic").hide();
    $("[id^=btn]").attr('class', 'clickDisabled');

    setAudio( audio , `CPI_01_HTML_Onboarding_V51_VO PRESENTADOR` );

    //eventos de videoName
    const delayItems = () => {
      if (audio.currentTime > 8 && audio.currentTime <= 8.3 && audioTurn === 0) {
        $("#pop6").show();
      }

      if (audio.currentTime > 18 && audio.currentTime <= 18.3 && audioTurn === 0) {
        $("#pop7").show();
      }

      if (audio.currentTime > 23 && audio.currentTime <= 23.3 && audioTurn === 0) {
        $("#pop8").show();
      }

    }

    audio.addEventListener('timeupdate', delayItems);

    $("#audio").on("ended", () => {
      if(audioTurn === 0){
        $("[id^=btn]").attr('class', 'cursor');
        $("#daclic1, #daclic2, #daclic3, #daclic4, #daclic5").attr('class', 'infinite flash').show();
        audioTurn = 1;
      } 
    });

    $("[id^=btn]").on("click", (e) => {
      const id = (e.currentTarget.id).replace('roll','').slice(3, 4) * 1;

      $(`#btn${id}, #daclic${id}, [id^=pop]`).hide();
      $(`#pop${id}`).show();

      if(!videoViwed.includes(id)){
        videoViwed.push(id);
      }

      if(videoViwed.length === 5){
        $("#adelante").attr('class', 'cursor infinite flash').show();
        $("#banderaclic").attr('class', 'infinite flash').show();
      }

      //setAudio( audio , `CPI_01_HTML_Onboarding_V5${id + 1}_VO PRESENTADOR` );
     
    });//Funcion para boton 1

  });
});
