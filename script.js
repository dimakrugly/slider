const images = document.querySelectorAll('.slider .sliderLine img');
const sliderLine = document.querySelector('.sliderLine');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    console.log(width);
}

window.addEventListener('resize', init);
init();

document.querySelector('.sliderPrev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
rollSlider ();
});


document.querySelector('.sliderNext').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
rollSlider ();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-'+count*width+'px)';

}