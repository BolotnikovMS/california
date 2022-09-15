document.addEventListener('DOMContentLoaded', () => {
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop:true,
		margin:10,
		nav:true,
		dots: true,
		navText: [
			'<span class="slider__arrow slider__prev"></span>',
			'<span class="slider__arrow slider__next"></span>'
		],
		autoplay: true,
		autoplayTimeout: 7000,
		// responsive:{
		// 	0:{
		// 		items:1
		// 	},
		// 	600:{
		// 		items:3
		// 	},
		// 	1000:{
		// 		items:5
		// 	}
		// }
	})
})