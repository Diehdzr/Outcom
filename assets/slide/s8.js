$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s8_01.svg', function () {

    preguntas = true;

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    $("#retro, #adelante1roll, #banderaclic").hide();

    $("#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8").attr('class', 'cursor').show();
    $("#daclic1, #daclic2, #daclic3, #daclic4, #daclic5, #daclic6, #daclic7, #daclic8").attr('class', 'infinite flash').show();
    $("[id$=roll]").attr('class', 'clickDisabled');

    const respuestasCorrectas = ['btn1', 'btn2', 'btn3', 'btn5', 'btn7'];
    let respuestas = [];

    $("[id^=btn]").on('click', (e) => {
      const id = e.currentTarget.id;

      if(!respuestas.includes(id)) {
        respuestas.push(id);
      }

      $(`#${id}, [id^=daclic]`).hide();

      const revisarRespuestas = () => {
        return respuestasCorrectas.every((respuesta) => respuestas.includes(respuesta));
      }
      
      if(respuestas.length == 5) {
        if(!revisarRespuestas()) {
          preguntas = false;
        }
        $("[id^=btn]").attr('class', 'clickDisabled');
        $("#adelante").attr('class', 'cursor infinite flash').show();
        $("#banderaclic").attr('class', 'infinite flash').show();
      }

    });



  });
});
