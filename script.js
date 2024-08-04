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






// --------------------------------------Theme Switch-------------------------------------------

let isDark = true;

$(".theme-switch img").click(function() {
    if (isDark) {
        isDark = false;
        $(".theme-switch img").attr("src","./Svg/toggle-off.svg")
        $(":root").css("--Background", "#ffffff");
        $(":root").css("--headingColor", "#42446e");
        $(":root").css("--color", "#666666");
        $(":root").css("--projectBackground", "#fefefe");
        $(":root").css("--projectColor", "#000000");
        $(":root").css("--boxShadow","0 4px 8px rgba(0, 0, 0, 0.1)");


    } else {
        isDark = true;
        $(".theme-switch img").attr("src","./Svg/toggle-on.svg")
        $(":root").css("--Background", "#191919");
        $(":root").css("--headingColor", "#d9d9d9");
        $(":root").css("--color", "#a7a7a7");
        $(":root").css("--projectBackground", "#363636");
        $(":root").css("--projectColor", "#cccccc");
        $(":root").css("--boxShadow","0 0 10px 5px rgba(255, 255, 255, 0.689)");

    }
});




// -------------------------------read more project-------------------------------------

// $('#toggle-button').click(function() {
//     var para = $('#project-para');
//     if (para.hasClass('expanded')) {
//         para.removeClass('expanded');
//         $(this).text('Read More');
//     } else {
//         para.addClass('expanded');
//         $(this).text('Read Less');
//     }
// });