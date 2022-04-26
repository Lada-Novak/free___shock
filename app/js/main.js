$(function(){
  $('.slider-top__items').slick({
    prevArrow: '<button type="button" class="slider-top__prev"><img src="images/icons/arrow__left.svg" alt="arrow_left"></button>',
    nextArrow: '<button type="button" class="slider-top__next"><img src="images/icons/arrow__right.svg" alt="arrow_right"></button>',
    autoplay: true,
    autoplaySpead: 3000,
  });

  var mixer = mixitup('.article');
});