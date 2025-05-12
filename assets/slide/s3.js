$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s3_01.svg', function () {

    const video = createVideo();

    let videoTurn = 0;

    $(window).resize(() => {
      resize(video);
    });

    //ajustar tamaño de video por primera vez
    resize(video);

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca
    $("#daclic1, #btn1, #btn1roll, #daclic2, #btn2, #btn2roll, #daclic3, #btn3, #btn3roll, #daclic, #daclic4, #btn4, #btn4roll, #txt3, #playvideo").hide();

    setVideo(video, 'video_1_comp');

    $("#video").on("ended", () => {
      document.fullscreenElement && exitFullscreen();
      $("#video").hide();
      $("#txt3").show();
      $("#btn4").attr('class', 'cursor').show();
      $("#daclic4").attr('class', 'infinite flash').show();
    });

    //eventos de videoName
    const delayItems = () => {
      if (video.currentTime > 39 && video.currentTime <= 39.3 && videoTurn === 0) {
        video.pause();
        $("#btn1, #btn2, #btn3").attr('class', 'cursor').show();
        $("#daclic1, #daclic2, #daclic3").attr('class', 'infinite flash').show();
        setTimeout(() => {
          $("#play").attr('class', 'clickDisabled');
        }, 100);
      }

    }

    video.addEventListener('timeupdate', delayItems);

    $("#btn1, #btn2, #btn3").on("click", (e) => {
      const id = e.currentTarget.id;

      $("#btn1, #btn2, #btn3, #daclic1, #daclic2, #daclic3").hide();

      if (id === "btn1") {
        setVideo(video, 'video_1.2_comp');
        videoTurn = 1;
      } else {
        setVideo(video, 'video_1.1_comp');
        videoTurn = 2;
      }

    });

    $("#btn4").on("click", (e) => {
      adelante(e);
    });


  });
});
