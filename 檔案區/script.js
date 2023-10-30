$(document).ready(function () {
  $('.rwdmenu').click(function () {
    $('.menu-all').fadeToggle();

    return false;
  });

  const mySwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000, 
    },
  });
});