import * as burger from './modules/burger';
import * as dynamicAdapt from './modules/dynamicAdapt';
import * as spoller from './modules/spoller';
import Swiper, { FreeMode } from 'swiper';

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 22,
	breakpoints: {
		374: {
			slidesPerView: 1.13,
			spaceBetween: 22
		},
		576: {
			slidesPerView: 1.8,
			spaceBetween: 22
		},
		768: {
			slidesPerView: 2.15
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 36,
		}

	}
});
