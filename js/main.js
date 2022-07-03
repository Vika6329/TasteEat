$(function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
      }
    }

  });


});
$('.menu-btn, .header-menu__close').on('click', function () {
  $('.header-menu').toggleClass('header-menu--active');
  $('.menu-btn').toggleClass('menu-btn--active');
  $('body').toggleClass('lock');
  // $('body').toggleClass('overlay')
});