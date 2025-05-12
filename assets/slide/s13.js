$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s13_01.svg', function () {

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    $("#txt1, #txt2, #daclic1, #btn1, #btn1roll, #daclic2, #btn2, #btn2roll").hide();

    if (preguntas){
      $("#txt1").show();
      $("#btn1").attr('class', 'cursor').show();
      $("#daclic1").attr('class', 'infinite flash').show();
    } else {
      $("#txt2").show();
      $("#btn2").attr('class', 'cursor').show();
      $("#daclic2").attr('class', 'infinite flash').show();
    }

    $("#btn1").on("click", (e) => {
      adelante(e);
    });

    $("#btn2").on("click", (e) => {
      no_slide = 7;
      adelante(e);
    });

  });
});
