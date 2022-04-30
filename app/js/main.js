$(function(){
  $('.slider-top__items').slick({
    prevArrow: '<button type="button" class="slider-top__prev"><img src="images/icons/arrow__left.svg" alt="arrow_left"></button>',
    nextArrow: '<button type="button" class="slider-top__next"><img src="images/icons/arrow__right.svg" alt="arrow_right"></button>',
    autoplay: true,
    autoplaySpead: 3000,
  });



  //mixitUp
   var containerEl1 = document.querySelector('[data-ref="container-1"]');
   var containerEl2 = document.querySelector('[data-ref="container-2"]');

   var config = {
   	controls: {
   		scope: 'local'
   	}
   };

   var mixer1 = mixitup(containerEl1, config);
   var mixer2 = mixitup(containerEl2, config);



  // var mixer = mixitup('.article');
  // var mixer = mixitup('.sales__article');
});
