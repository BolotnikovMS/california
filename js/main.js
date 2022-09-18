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

//	Link scroll
	const basket = document.querySelector('.basket')

	function linkScroll(nav) {
		const links = nav.querySelectorAll('a[href*="#"]')

		$(links).on("click", function(e){
			const anchor = $(this)
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 777);
			e.preventDefault()
			return false;
		})
	}

	linkScroll(basket)

//	Dropdown
	const dropdownToggle = document.querySelector('.dropdown-toggle')
	const dropdownMenu = document.querySelector('.dropdown-menu')

	dropdownToggle.addEventListener('click', () => {
		dropdownMenu.classList.toggle('active')
	})

//	Add to basket
	const addBtnsBasket = document.querySelectorAll('.product__add')
	const basketCounter = document.querySelector('.basket__count')

	let count = 0
	addBtnsBasket.forEach(btn => {
		btn.addEventListener('click', () => {
			count++

			basketCounter.innerHTML = `${count}`
			if (!basketCounter.classList.contains('addProduct')) basketCounter.classList.add('addProduct')

			btn.innerText = '+1'
			btn.style.backgroundColor = '#fff'
			btn.style.color = '#000'
			btn.style.transition = 'all 0.2s ease-in'

			setTimeout(() => {
				btn.innerText = 'Add to Basket'
				btn.style.backgroundColor = '#000'
				btn.style.color = '#fff'
			}, 800)
		})

	})
})