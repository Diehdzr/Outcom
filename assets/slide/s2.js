$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s2_01.svg', function () {

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    $("#daclic1, #btn1, #btn1roll, #daclic2, #btn2, #btn2roll, #pop1").hide();

    //evento de teclado
    $("[id^='rectxt']").keydown(() => {
      setTimeout(() => {
        let allTrue = 3;
        for (let i = 0; i < 3; i++) {
          let value = $("#rectxt" + (i + 1)).find('input').val();
          if (!value) {
            allTrue--;
          }
        }
        if (allTrue === 3) {
          $("#btn1").attr('class', 'cursor').show();
          $("#daclic1").attr('class', 'infinite flash').show();
        }
      }, 100)
    });

    $("#btn1").on("click", (e) => {
      const misDatos = [];
      for (let i = 0; i < 3; i++) {
        let value = $("#rectxt" + (i + 1)).find('input').val();
        misDatos.push(value);
      }
      usuario.nombre = misDatos[0];
      usuario.empresa = misDatos[1];
      usuario.giro = misDatos[2];
      usuario.club = $("#opciones").val();
      usuario.portada = $("#opciones option:selected").attr('data-value');
      adelante(e);
    });

  });
});
