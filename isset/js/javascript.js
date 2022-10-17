$(document).ready(function(){
    $('.slider').slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-circle-arrow-left"></i></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-circle-arrow-right"></i></button>`,

    });
  });
  