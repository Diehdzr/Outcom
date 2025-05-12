$(document).ready(() => {

  $('#loadSvg').load('assets/images/svg/s6_01.svg', function () {

    //valores iniciales
    cursorPleca();//cursor en los botones de la pleca
    //variables
    let count = 0;

    //create div class bb-custom-wrapper
    let container = document.createElement('div');
    container.setAttribute('class', 'main clearfix');
    document.getElementById('loadSvg').appendChild(container);

    let wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'bb-custom-wrapper');
    container.appendChild(wrapper);

    //create btn prev
    let btnPrev = document.createElement('div');
    btnPrev.setAttribute('id', 'bb-nav-prev');
    btnPrev.setAttribute('class', 'bb-custom-btn cursor');
    wrapper.appendChild(btnPrev);

    //image prev
    let imgPrev = document.createElement('img');
    imgPrev.setAttribute('class', 'bb-custom-btn-img');
    imgPrev.setAttribute('src', 'assets/images/general/left-arrow.png');
    btnPrev.appendChild(imgPrev);

    let bookblock = document.createElement('div');
    bookblock.setAttribute('class', 'bb-bookblock');
    bookblock.setAttribute('id', 'bb-bookblock');
    wrapper.appendChild(bookblock);

    //create 5 div class bb-item and two sub-div class bb-custom-side
    for (let i = 0; i < 9; i++) {
      let item = document.createElement('div');
      item.setAttribute('class', 'bb-item');
      bookblock.appendChild(item);
      //div backgroud-image
      let page1 = document.createElement('div');
      page1.setAttribute('class', 'bb-img prevpgn cursor');
      page1.style.backgroundImage = 'url(assets/images/magazine/01/' + (i + 1) + '-large.png)';
      item.appendChild(page1);
      let page2 = document.createElement('div');
      page2.setAttribute('class', 'bb-img nextpgn cursor');
      page2.style.backgroundImage = 'url(assets/images/magazine/01/' + (i + 2) + '-large.png)';
      item.appendChild(page2);

      i++;
    }

    //create btn next
    let btnNext = document.createElement('div');
    btnNext.setAttribute('id', 'nav-next');
    btnNext.setAttribute('class', 'bb-custom-btn bb-nav-next cursor');
    wrapper.appendChild(btnNext);

    //image next
    let imgNext = document.createElement('img');
    imgNext.setAttribute('class', 'bb-custom-btn-img');
    imgNext.setAttribute('src', 'assets/images/general/right-arrow.png');
    btnNext.appendChild(imgNext);

    //var page function
    var Page = (function () {

      var config = {
        $bookBlock: $('#bb-bookblock'),
        $navNext: $('.bb-nav-next'),
        $navPrev: $('#bb-nav-prev'),
        $navFirst: $('#bb-nav-first'),
        $navLast: $('#bb-nav-last')
      },
        init = function () {
          config.$bookBlock.bookblock({
            speed: 1000,
            shadowSides: 0.8,
            shadowFlip: 0.4
          });
          initEvents();
        },
        initEvents = function () {

          var $slides = config.$bookBlock.children();

          // add navigation events
          config.$navNext.on('click', function () {
            config.$bookBlock.bookblock('next');
            count++;
            if (count === 5) {
              fin();
            }
            bodyOverflow();
            return false;
          });

          config.$navPrev.on('click', function () {
            config.$bookBlock.bookblock('prev');
            count--;
            if (count < 0) {
              count = 0;
              portada();
            }
            bodyOverflow();
            return false;
          });

          config.$navFirst.on('click touchstart', function () {
            config.$bookBlock.bookblock('first');
            return false;
          });

          config.$navLast.on('click touchstart', function () {
            config.$bookBlock.bookblock('last');
            return false;
          });

          // add swipe events
          $slides.on({
            'swipeleft': function (event) {
              config.$bookBlock.bookblock('next');
              count++;
              if (count === 5) {
                fin();
              }
              bodyOverflow();
              return false;
            },
            'swiperight': function (event) {
              config.$bookBlock.bookblock('prev');
              count--;
              if (count < 0) {
                count = 0;
                portada();
              }
              bodyOverflow();
              return false;
            }
          });

          // add keyboard events
          $(document).keydown(function (e) {
            var keyCode = e.keyCode || e.which,
              arrow = {
                left: 37,
                up: 38,
                right: 39,
                down: 40
              };

            switch (keyCode) {
              case arrow.left:
                if ($('.main').css('z-index') === '10') {
                  config.$bookBlock.bookblock('prev');
                  count--;
                  if (count < 0) {
                    count = 0;
                    portada();
                  }
                  bodyOverflow();
                }
                break;
              case arrow.right:
                if ($('.main').css('z-index') === '10') {
                  config.$bookBlock.bookblock('next');
                  count++;
                  if (count === 5) {
                    fin();
                  }
                  bodyOverflow();
                }
                break;
            }
          });
        };

      return { init: init };

    })();

    setTimeout(() => {
      Page.init();
    }, 1000);

    //capturar tamaño de recrevista
    const revistaContainer = document.getElementById('recrevista');
    let domRectRevista = revistaContainer.getBoundingClientRect();
    let domRectRevista2 = bookblock.getBoundingClientRect();

    //funciones resizer
    const getSize = () => {
      domRectRevista = revistaContainer.getBoundingClientRect();
      const revistaHeight = domRectRevista.height;
      const revistaWidth = domRectRevista.width;
      const revistaX = domRectRevista.x;
      const revistaY = domRectRevista.y;
      return { revistaHeight, revistaWidth, revistaX, revistaY };
    };

    const resize = () => {
      const { revistaHeight, revistaWidth, revistaX, revistaY } = getSize();
      container.style.height = `${revistaHeight}px`;
      bookblock.style.height = `${revistaHeight}px`;
      btnPrev.style.height = `${revistaHeight}px`;
      btnNext.style.height = `${revistaHeight}px`;
      container.style.width = `${revistaWidth}px`;
      container.style.left = `${revistaX}px`;
      container.style.top = `${revistaY}px`;
    };

    $(window).resize(() => {
      resize();
    });

    resize();

    //valores iniciales

    $("#btn1").attr('class', 'cursor');
    $("#daclic1").attr('class', 'infinite flash');

    //funciones 
    const fin = () => {
      adelante();
    };

    const bodyOverflow = () => {
        $('body').css('overflow', 'hidden');
        $("#btn2, #btn3").hide();
      setTimeout(() => {
        $('body').css('overflow', 'auto');
        $("#btn2, #btn3").attr('class', 'cursor').show();
      }, 1000);
    };

    const portada = () => {
      container.style.zIndex = '-10';
      $("#btn1").attr('class', 'cursor').show();
      $("#daclic1").attr('class', 'infinite flash').show();
      $("#btn3").hide();
    };


    $("#btn1").on('click touchstart', () => {
      container.style.zIndex = '10';
      $("#btn1, #daclic1").hide();
      $("#btn3").attr('class', 'cursor').show();
    });

    $(".nextpgn").on('click touchstart', () => {
      $("#nav-next").click();
    });

    $(".prevpgn").on('click touchstart', () => {
      $("#bb-nav-prev").click();
    });


  });
});
