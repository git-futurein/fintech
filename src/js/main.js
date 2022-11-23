// theme
const btnDark = document.querySelector('.btn-dark');
const btnLight = document.querySelector('.btn-light');
const html = document.querySelector('html');

btnDark.addEventListener('click', () => {
	html.classList.remove('light');
	html.classList.add('dark');
});

btnLight.addEventListener('click', () => {
	html.classList.remove('dark');
	html.classList.add('light');
});

// shop pgae sidebar
const closeCategoryBtn = document.querySelector('.btn-close-categories');
const openCategoryBtn = document.querySelector('.btn-category');
const shop = document.querySelector('.shop');

if (shop) {
	closeCategoryBtn.addEventListener('click', () => {
		shop.classList.remove('show-category');
	});
	openCategoryBtn.addEventListener('click', () => {
		shop.classList.add('show-category');
	});
}

// swiper carousel
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
