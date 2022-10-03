"use script";

const imeges = document.querySelectorAll(".slider .slider__line img");
const sliderLine = document.querySelector(".slider__line");
let count = 0;
let width;

const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");

function init() {
	console.log('resize');
	width = document.querySelector(".slider").offsetWidth;
	sliderLine.style.width = width * imeges.length + 'px';
	imeges.forEach(item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	})
	rollSlider();
};

window.addEventListener('resize', init);
init();

sliderNext.addEventListener('click', function () {
	count++;
	if (count >= imeges.length) {
		count = 0;
	}
	rollSlider();
});

sliderPrev.addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = imeges.length - 1;
	}
	rollSlider();
});

function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}