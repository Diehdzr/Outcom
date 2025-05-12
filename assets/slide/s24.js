$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s24_01.svg', function () {


    //Genera etiqueta de audio y video con el id que se manda en la funcion
    const video = createVideo(); 
    
    //ajustar tamaño de video automaticamente
    $(window).resize(() => {
      resize(video);
    });

    //ajustar tamaño de video por primera vez
    resize(video);

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca
    $("#daclic1, #btn1, #btn1roll, #daclic, #playvideo").hide();

    setVideo(video, 'video_10_comp');

    $("#video").on("ended", () => {
      document.fullscreenElement && exitFullscreen();
      $("video").hide();
      $("#btn1").attr('class', 'cursor').show();
      $("#daclic1").attr('class', 'infinite flash').show();
    });

    
    var img1 = new Image();
    img1.src = source[usuario.portada];

    var img2 = new Image();
    img2.src = source.pg2;

    var img3 = new Image();
    img3.src = source.pg3;

    $("#btn1").on("click", (e) => {
      var options = {};
      var pdf = new jsPDF('p', 'mm', 'letter');
      pdf.setProperties({
        title: "Mis_ejercicios_para_el_club"
      });

      pdf.setFontSize(14);
      pdf.addFont('Neris-Light');
      pdf.setFont('Neris-Light');

      pdf.addImage(img1, 'JPG', 0, 0, 216, 280);

      var queVendes = pdf.splitTextToSize(usuario.dinamicas.dinamica1, (210 - 60 - 0));

      pdf.setTextColor(90, 90, 90);
      pdf.text(50, 72.5, usuario.nombre);
      pdf.text(50, 80.5, usuario.empresa);
      pdf.text(40, 88.5, usuario.giro);
      pdf.text(80, 96.5, usuario.club);
      pdf.text(30, 185, queVendes);

      pdf.addPage();

      pdf.addImage(img2, 'JPG', 0, 0, 216, 280);

      var dinamica2A = pdf.splitTextToSize(usuario.dinamicas.dinamica2[0], (210 - 60 - 0));
      var dinamica2B = pdf.splitTextToSize(usuario.dinamicas.dinamica2[1], (210 - 60 - 0));
      var dinamica2C = pdf.splitTextToSize(usuario.dinamicas.dinamica2[2], (210 - 60 - 0));

      pdf.text(30, 75, dinamica2A);
      pdf.text(30, 150, dinamica2B);
      pdf.text(30, 220, dinamica2C);

      pdf.addPage();

      pdf.addImage(img3, 'JPG', 0, 0, 216, 280);

      pdf.text(30, 75, usuario.dinamicas.dinamica3[0]);
      pdf.text(30, 80, usuario.dinamicas.dinamica3[1]);
      pdf.text(30, 85, usuario.dinamicas.dinamica3[2]);

      //open in new tap
      window.open(pdf.output('bloburl'), '_blank');

      adelante(e);
    });


  });
});
