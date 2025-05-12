$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s20_01.svg', function () {

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca
    $("#btn1").attr('class', 'cursor').show();
    $("#daclic1").attr('class', 'infinite flash').show();

    $("#btn1").on("click", (e) => {
      downloadPDF('CPI_decalogo', true);
      adelante(e);
    });


  });
});
