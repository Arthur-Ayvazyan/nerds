
@@include('jquery.min.js');
@@include('slick.js');
window.onload = function () {

  function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  };

  testWebP(function (support) {

    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
  //---------------------------------------------------------


  $('.burger').on('click', function (e) {
    // e.preventDefault;
    $(this).toggleClass('burger_active');
    $('.menu').toggleClass('menu_active');
    $('body').toggleClass('scroll-hidden');
  });

  $('.address-info__button').on('click', function (e) {
    $('body').toggleClass('scroll-hidden');
    $('.modal').addClass('modal_active');
  });
  $('.popup-closer').on('click', function (e) {
    $('.modal').removeClass('modal_active');
    $('body').toggleClass('scroll-hidden');
  });

  $('.filter__burger').on('click', function (e) {
    $('body').toggleClass('scroll-hidden');
    $('.side-bar').addClass('side-bar--active');
  });
  $('.menu-closer__btn').on('click', function (e) {
    $('.side-bar').removeClass('side-bar--active');
    $('body').toggleClass('scroll-hidden');
  });

  $('.main-slider-content').slick({
    lazyLoad: 'progressive',
    arrows: false,
    dots: true,
    fade: true,
    speed: 500,
    centerPadding: '0',
    centerMode: true,
    // autoplay: true,
    // autoplaySpeed: '3',
    // focus: false,
  });

  // ----------------------- map ----------------------------

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.938985, 30.321218],
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search'
    });

    // Создаём макет содержимого.
    var MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    );

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'our studio',
      balloonContent: 'we always wait you with :)'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map/map_marker.png',
      // Размеры метки.
      iconImageSize: [115.5, 95],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [140, -35]
    });

    myMap.geoObjects.add(myPlacemark);

  });

  if ($('body').width() < 550) {
    // $('#map').width('90%');
  }


} // window onload