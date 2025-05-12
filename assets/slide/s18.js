$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s18_01.svg', function () {

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    $("#pop1, #pop2, #cerrar, #overlay, #btn11, #btn11roll, #daclic11, #btn12, #btn12roll, #daclic12").hide();

    $("[id^='btn']").attr('class', 'cursor');
    $("[id$='roll']").attr('class', 'clickDisabled');

    //variables
    let allOk = true;
    const correctas = {
      1: 10,
      2: 6,
      3: 7,
      4: 8,
      5: 9
    };

    const resp = {};

    let aux = null,
      cont = 0;

    $("#cerrar").on('click', () => {

      if (!allOk) {
        $("#cerrar, #pop1, #btn11roll, #overlay").hide();
        allOk = true;
        aux = null;
        cont = 0;
        $("#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9, #btn10").attr('class', 'cursor').show();
      } else {
        adelante();
      }
      
    });

    //funciones 
    const addResp = (btn1, btn2) => {
      resp[btn1] = btn2;
      if (cont === 5) {
        $("#btn11").attr('class', 'cursor').show();
        $("#daclic11").attr('class', 'infinite flash').show();
      }
    };

    const revisar = () => {
      for (let i = 1; i <= Object.keys(correctas).length; i++) {
        if (resp[i] !== correctas[i]) {
          allOk = false;
        }
      }
      if (allOk) {
        $("#pop2, #overlay").show();
        $("#btn12").attr('class', 'cursor').show();
        $("#daclic12").attr('class', 'infinite flash').show();
      } else {
        $("#pop1, #overlay").show();
        $("#cerrar").attr('class', 'cursor').show();
      }
    };

    $("[id^=btn]").on('click', (e) => {
      let btn = (e.currentTarget.id).replace('btn', '') * 1;

      if( btn <= 10){
        $("[id^='btn']").attr('class', 'cursor');
        $("[id$='roll']").attr('class', 'clickDisabled');
        $("#btn" + btn + "roll").hide();
        $("#btn" + btn).attr('class', 'focused');
  
        if (!aux || aux > 5 && btn > 5 || aux < 6 && btn < 6) {
          aux = btn;
        } else {
          $("#btn" + aux + ", #btn" + btn).hide();
          $("#btn" + aux + "roll, #btn" + btn + "roll").show();
          cont++;
          if (btn > aux) {
            addResp(aux, btn);
          } else {
            addResp(btn, aux);
          }
          aux = null;
        }
      }


    });

    $("#btn11").on("click", () => {
      $("#btn11, #daclic11").hide();
      $("#btn11roll").show();
      revisar();
    });

    $("#btn12").on("click", () => {
      downloadPDF('CPI_reuniones', true);
      $("#btn12, #daclic12").hide();
      $("#btn12roll").show();
      $("#cerrar").attr('class', 'cursor').show();
    });


  });
 
});