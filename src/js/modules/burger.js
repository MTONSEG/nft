// const iconBurger = document.querySelector('.nav-header__menu-icon');
// const menuBurger = document.querySelector('.nav-header__list');

// document.addEventListener('click', e => {
// 	let clickBurger = e.composedPath().includes(iconBurger);
// 	let withinBoundaries = e.composedPath().includes(menuBurger);

// 	if (clickBurger) {
// 		document.body.classList.toggle('_lock');
// 		iconBurger.classList.toggle('_active');
// 		menuBurger.classList.toggle('_active');
// 	} else if (!withinBoundaries) {
// 		document.body.classList.remove('_lock');
// 		iconBurger.classList.remove('_active');
// 		menuBurger.classList.remove('_active');
// 	}
// })

const iconBurger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.nav-header');

iconBurger.addEventListener('click', e => {
	iconBurger.classList.toggle('_active');
	menuBurger.classList.toggle('_active');
	document.body.classList.toggle('_lock')

})