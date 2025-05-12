$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/portada_01.svg', function () {

    $("#btn1roll").hide();

    setTimeout(function () {
      $('#daclic1').attr('class', 'infinite flash').show();
      $('#btn1').attr('class', 'cursor').show();
    }, 200);

    $("#btn1").on('click', (e) => {
      adelante(e);
    });

  });
});