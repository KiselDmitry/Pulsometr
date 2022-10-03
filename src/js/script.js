"use script";

let offset = 0;
const sliderLine = document.querySelector(".slider__line");
const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");

sliderNext.addEventListener('click', function () {
	offset = offset + 750;
	if (offset > 2250) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
});

sliderPrev.addEventListener('click', function () {
	offset = offset - 750;
	if (offset < 0) {
		offset = 2250;
	}
	sliderLine.style.left = -offset + 'px';
});