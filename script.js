const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const total = slides.length;

function updateSlider(){
    if(index >= total) index = 0;
    if(index < 0) index = total - 1;

    slidesContainer.style.transform =
        `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));

    if(dots[index]){
        dots[index].classList.add('active');
    }
}

next.onclick = () => {
    index++;
    updateSlider();
};

prev.onclick = () => {
    index--;
    updateSlider();
};

dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i;
        updateSlider();
    };
});