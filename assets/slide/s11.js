$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s11_01.svg', function () {

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    $("#adelante1roll, #banderaclic").hide();

    $("#btn1, #btn2, #btn3").attr('class', 'cursor').show();
    $("#daclic1, #daclic2, #daclic3").attr('class', 'infinite flash').show();

    const respCorrect = [
      'comité',
      'miembros',
      'voz',
      'mejora continua',
      'subcomités'
    ];

    let resp = [];
    let count = 0;

    $(".select").change( (e) => {
      const value = e.currentTarget.value;
      const noSelect = e.currentTarget.getAttribute('data-no');

      if(!resp[noSelect]){
        count ++;
      }

      resp[noSelect] = value;

      if(count === 5){
        $("#adelante").attr('class', 'cursor infinite flash').show();
        $("#banderaclic").attr('class', 'infinite flash').show();
      }

    });

    $("#adelante").on('click', (e) => {
      let allOk = true;

      for(let i = 0; i < respCorrect.length; i++){
        if(respCorrect[i] !== resp[i]){
          allOk = false;
        }
      }

      if(!allOk){
        preguntas = false;
      }
    });



  });
});
