$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s26_01.svg', function () {

    cursorPleca();//cursor en los botones de la pleca
    $("#adelante, #adelanteroll, #play, #refresh, #refreshroll").hide();
    const disablePlay = setTimeout(() => {
      $("#play").attr('class', 'clickDisabled');
      clearTimeout(disablePlay);
    }, 10);

    $("#cerrar").attr('class', 'cursor').show();
    $("#daclic").attr('class', 'infinite flash').show();

    $("#cerrar").on('click', (e) => {
      cerrar(e);
    })

  });
});