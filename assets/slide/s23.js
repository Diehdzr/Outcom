$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s23_01.svg', function () {

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    $("#daclic1, #btn1, #btn1roll, #daclic2, #btn2, #btn2roll, #pop1").hide();

    const palabrasMinimas = [0, 0, 0];

    function contarPalabras(value) {
      // Eliminar espacios extra al inicio y al final, y reemplazar múltiples espacios por uno solo
      value = value.trim().replace(/\s+/g, ' ');

      // Dividir la cadena por espacios y contar las palabras
      const palabras = value.split(' ');

      // Si la cadena está vacía, el array resultante será [''], así que devolvemos 0
      return value === '' ? 0 : palabras.length;
    }

    //evento de teclado
    $("[id^='rectxt']").keydown(() => {
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          let value = $("#rectxt" + (i + 1)).find('input').val();
          palabrasMinimas[i] = contarPalabras(value);
          console.log(palabrasMinimas);
        }
        if (palabrasMinimas.every(palabra => palabra >= 1)) {
          $("#btn1").attr('class', 'cursor').show();
          $("#daclic1").attr('class', 'infinite flash').show();
        } else {
          $("#btn1").hide();
          $("#daclic1").hide();
        }
      }, 100)
    });

    $("#btn1").on("click", (e) => {
      const tresCaracteristicas = [];
      for (let i = 0; i < 3; i++) {
        let value = $("#rectxt" + (i + 1)).find('input').val();
        tresCaracteristicas.push(value);
      }
      usuario.dinamicas.dinamica3[0] = tresCaracteristicas[0];
      usuario.dinamicas.dinamica3[1] = tresCaracteristicas[1];
      usuario.dinamicas.dinamica3[2] = tresCaracteristicas[2];
      adelante(e);
    });


  });
});
