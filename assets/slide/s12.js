$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s12_01.svg', function () {

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    $("#retro, #adelante1roll, #banderaclic").hide();

    $("#btn1, #btn2, #btn3").attr('class', 'cursor').show();
    $("#daclic1, #daclic2, #daclic3").attr('class', 'infinite flash').show();

    $("[id^=btn]").on('click', (e) => {
      const id = e.currentTarget.id;

      $(`#${id}, [id^=daclic]`).hide();
      $("[id^=btn]").attr('class', 'clickDisabled');
      if(id !== 'btn1'){
        preguntas = false;
      }
      $("#adelante").attr('class', 'cursor infinite flash').show();
      $("#banderaclic").attr('class', 'infinite flash').show();
    });



  });
});
