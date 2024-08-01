const $left = $('.arrow-left');
const $right = $('.arrow-right');
const $slider = $('.slider');
const $projects = $('.project-detail');
let slideNumber = 1;
const length = $projects.length;

const nextSlide = () => {
    if (slideNumber < length) {
        slideNumber++;
        updateSlider();
    } else {
        getFirstSlide();
    }
};

const prevSlide = () => {
    if (slideNumber > 1) {
        slideNumber--;
        updateSlider();
    } else {
        getLastSlide();
    }
};

const getFirstSlide = () => {
    slideNumber = 1;
    updateSlider();
};

const getLastSlide = () => {
    slideNumber = length;
    updateSlider();
};

const updateSlider = () => {
    $slider.css('transform', `translateX(${-(slideNumber - 1) * 100}%)`);
};

$right.on('click', nextSlide);
$left.on('click', prevSlide);
