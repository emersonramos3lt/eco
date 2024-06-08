const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    } // Define o intervalo de troca de slide, e também chama a function nextSlide()
}

function showSlide(index) {
    // Quando chegar no último slide, ele volta ao primeiro
    if (index >= slides.length) {
        slideIndex = 0;
    }

    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });

    slides[slideIndex].classList.add("displaySlide");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
} // Chama a function showSlide() 

//setInterval em initializeSlider() chama nextSlide() e nextSlide() add ++ para trocar as imagens



// ----------- MENU --------------

const mainMenu = document.getElementById("mainMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", open);
closeMenu.addEventListener("click", close);

function open() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}

function close() {
    mainMenu.style.top = "-110%"
}