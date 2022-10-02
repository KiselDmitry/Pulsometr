$(document).ready(function(){
	$('.carusel__inner').slick({
		speed: 1200,
		adaptiveHeight: true,
		// autoplay: true,
		// autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/right.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/left.svg"></button>',
		responsive: [
			{
				breakpoint: 768,
     			settings: {
					dots: true,
					//dotsClass: 'slick-dots',
					arrows: false,
					centerMode: true,
					centerPadding: '40px'
					
      		}
			}
		]
	 });
 });