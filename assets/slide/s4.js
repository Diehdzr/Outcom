$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s4_01.svg', function () {
    
    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    $("#daclic1, #btn1, #btn1roll").hide();

    function contarPalabras(value) {
      // Eliminar espacios extra al inicio y al final, y reemplazar múltiples espacios por uno solo
      value = value.trim().replace(/\s+/g, ' ');

      // Dividir la cadena por espacios y contar las palabras
      const palabras = value.split(' ');

      // Si la cadena está vacía, el array resultante será [''], así que devolvemos 0
      return value === '' ? 0 : palabras.length;
    }

    //evento de teclado
    $("#rectxt").keydown(() => {
      setTimeout(() => {
        let value = $("#rectxt").find('textarea').val();
        if(value.length > 700){
          $("#rectxt").find('textarea').val(value.substring(0, 700));
        }
        if (contarPalabras(value) >= 30) {
          $("#btn1").attr('class', 'cursor').show();
          $("#daclic1").attr('class', 'infinite flash').show();
        } else {
          $("#btn1").attr('class', 'cursor').hide();
          $("#daclic1").attr('class', 'infinite flash').hide();
        }
        
      }, 100)
    });

    $("#btn1").on("click", (e) => {
      usuario.dinamicas.dinamica1 = $("#rectxt").find('textarea').val();
      adelante(e);
    });


  });
});
