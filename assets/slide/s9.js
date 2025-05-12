$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s9_01.svg', function () {

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    $("#retro, #adelante1roll, #banderaclic").hide();

    $("#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7").attr('class', 'cursor').show();
    $("#daclic1, #daclic2, #daclic3, #daclic4, #daclic5, #daclic6, #daclic7").attr('class', 'infinite flash').show();

    $("[id$=roll]").attr('class', 'clickDisabled');

    const respuestasCorrectas = ['btn1', 'btn3', 'btn4', 'btn7'];
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
      
      if(respuestas.length == 4) {
        if(!revisarRespuestas()) {
          console.log('Respuestas incorrectas');
          preguntas = false;
        }
        $("[id^=btn]").attr('class', 'clickDisabled');
        $("#adelante").attr('class', 'cursor infinite flash').show();
        $("#banderaclic").attr('class', 'infinite flash').show();
      }

    });

  });
});
