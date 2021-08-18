let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.nav_dot');
let left = document.getElementById("left");
let right = document.getElementById("right");
let currentSlide = 1;

let manualNav = function(manual) {
    slides.forEach((slider) => {
        slider.classList.remove('active_slide');
    });
    btns.forEach((btn) => {
        btn.classList.remove('active_slide');
    });
    slides[manual].classList.add('active_slide');
    btns[manual].classList.add('active_slide');
}
left.onclick = function () {
    document.getElementsByClassName('active_slide').previousElementSibling
    document.getElementsByClassName('active_slide').classList.remove('active_slide');
}
/*btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});*/
let repeat = function (activeClass) {
    let active = document.getElementsByClassName('active_slide');
    let i = 1;
    let repeater = () => {
        setTimeout(function() {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active_slide');
            });
        slides[i].classList.add('active_slide');
        btns[i].classList.add('active_slide');
        i++;
        if(slides.length == i) {
            i = 0;
        }
        if(i >= slides.length) {
            return;
        }
        repeater();
        },7000);
    }
    repeater();
}
repeat();
