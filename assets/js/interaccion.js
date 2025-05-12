$('document').ready(function () {

  window.no_slide = 0;//Siempre comienza en 0
  const totalSlide = 26;//Numero total de pantalla sin tomar en cuenta la portada

  /*-----------------------------------------------SCORM------------------------------------------------*/
  initCourse();

  //visibilitichange
  $(window).on('unload', () => {
    finish();
  });
  /*-----------------------------------------------SCORM------------------------------------------------*/

  $('body').on('click', '.next', () => {//Funcion para avanzar

    const nextPage = (no_slide >= totalSlide)
      ? `assets/slide/s${totalSlide}.js`
      : `assets/slide/s${no_slide += 1}.js`;

    /*-----------------------------------------------SCORM-------------------------------------------------*/
    scormSetSlide(no_slide.toString());
    scormScore(totalSlide === no_slide ? '100' : ((100 / totalSlide) * no_slide).toFixed(2));
    /*-----------------------------------------------SCORM-------------------------------------------------*/

    $.ajax({
      url: nextPage,
      type: 'GET',
      error: function (xhr, status) {
        alert('Error al cargar el archivo de JS: ' + status);
      },
      complete: function (xhr, status) {
        console.log(status);
      }
    });

  })

  $('body').on('click', '.prev', function () {//Funcion para retroceder

    (no_slide > 0)
      ? no_slide--
      : no_slide;

    const prevPage = (no_slide === 0)
      ? 'assets/slide/portada.js'
      : `assets/slide/s${no_slide}.js`;

      $.ajax({
        url: prevPage,
        type: 'GET',
        error: function (xhr, status) {
          alert('Error al cargar el archivo de JS: ' + status);
        },
        complete: function (xhr, status) {
          console.log(status);
        }
      });
  });

  $('body').on('click', '.reset', function () {//Funcion para resetear la pantalla actual

    const resetPage = (no_slide === 0)
      ? 'assets/slide/portada.js'
      : `assets/slide/s${no_slide}.js`;

      $.ajax({
        url: resetPage,
        type: 'GET',
        error: function (xhr, status) {
          alert('Error al cargar el archivo de JS: ' + status);
        },
        complete: function (xhr, status) {
          console.log(status);
        }
      });
  });

  $('body').on('click', '#atras', function () {//Funcion para boton retroceder
    $("#atras").hide();
    $("#atrasroll").show();
    setTimeout(() => {
      $('#fondo').attr('class', 'prev').click();
    }, 200)
  });

  $('body').on('click', '#adelante', function () {//Funcion para boton avanzar
    $("#adelante").hide();
    $("#adelanteroll").show();
    setTimeout(() => {
      $('#fondo').attr('class', 'next').click();
    }, 200)
  });

  $('body').on('click', '#refresh', function () {//Funcion para boton recargar
    $("#refresh").hide();
    $("#refreshroll").show();
    setTimeout(() => {
      $('#fondo').attr('class', 'reset').click();
    }, 200)
  });

  window.adelante = (e = false) => {//Funcion para boton avanzar 
    if (e) {//Si recibe "e"(objeto de evento en una funcion clic) como argumento del cual se extrae el id del boton presionado
      const id = (e.currentTarget.id).slice(3, 5) * 1;
      $(`#btn${id}, #daclic${id}`).hide();
      $(`#btn${id}roll`).show();
      setTimeout(() => {
        $('#fondo').attr('class', 'next').click();
      }, 200)
    } else {//Si no se recibio argumento "e" sera false y se ejecutara el cambio rapido
      $('#fondo').attr('class', 'next').click();
    }
  }

  window.atras = (e = false) => {//Funcion para boton retroceder
    if (e) {//Si recibe "e"(objeto de evento en una funcion clic) como argumento del cual se extrae el id del boton presionado
      const id = (e.currentTarget.id).slice(3, 5) * 1;
      $(`#btn${id}, #daclic${id}`).hide();
      $(`#btn${id}roll`).show();
      setTimeout(() => {
        $('#fondo').attr('class', 'prev').click();
      }, 200)
    } else {//Si no se recibio argumento "e" sera false y se ejecutara el cambio rapido
      $('#fondo').attr('class', 'prev').click();
    }
  }

  window.refresh = (e = false) => {//Funcion para boton recargar
    if (e) {//Si recibe "e"(objeto de evento en una funcion clic) como argumento del cual se extrae el id del boton presionado
      const id = (e.currentTarget.id).slice(3, 5) * 1;
      $(`#rfs${id}, #daclic${id}`).hide();
      $(`#rfs${id}roll`).show();
      setTimeout(() => {
        $('#fondo').attr('class', 'reset').click();
      }, 200)
    } else {//Si no se recibio argumento "e" sera false y se ejecutara el cambio rapido
      $('#fondo').attr('class', 'reset').click();
    }
  }

  window.cerrar = (e = false) => {//Funcion para boton de cierre
    if (e) {//Si recibe "e"(objeto de evento en una funcion clic) como argumento del cual se extrae el id del boton presionado
      const id = e.currentTarget.id;
      $(`${id}, #daclic`).hide();
      $(`#${id}roll`).show();
      setTimeout(() => {
        window.history.back();
        window.close();
        top.window.close();
        window.top.close(self);
      }, 200)
    } else {//Si no se recibio argumento "e" sera false y se ejecutara el cambio rapido
      window.history.back();
      window.close();
      top.window.close();
      window.top.close(self);
    }
  }

});

