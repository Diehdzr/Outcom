$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s25_01.svg', function () {

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca

    const redes = {
      btn1: 'https://www.instagram.com/cpi_mex/',
      btn2: 'https://www.facebook.com/profile.php?id=100086953084186',
      btn3: 'https://www.youtube.com/@ClubProveedoresdelaIndustria/videos',
      btn4: 'https://www.linkedin.com/company/71469188/admin/feed/posts/',
    }

    $("#adelante").attr('class', 'cursor').show();
    $("#banderaclic").attr('class', 'infinite flash').show();
    
    $("[id^=btn]").attr('class', 'cursor').show();
    $("[id^=daclic]").attr('class', 'infinite flash').show();

    $("[id^=btn]").on("click", (e) => {
      const id = e.currentTarget.id;
      $(`#daclic${id.slice(-1)}`).hide();

      window.open(redes[id], '_blank');
    });


  });
 
});