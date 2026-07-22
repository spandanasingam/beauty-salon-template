const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const expanded =
        menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", !expanded);

    if (navLinks.classList.contains("active")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// Existing button alert
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    alert("Booking feature coming soon!");
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/// ==========================
// Lightbox Gallery
// ==========================

const galleryLinks = document.querySelectorAll(".gallery-item a");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

galleryLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        lightbox.classList.add("active");

        lightboxImage.src = link.href;

        lightboxImage.alt = link.querySelector("img").alt;

    });

});

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (event) => {

    if(event.target === lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        lightbox.classList.remove("active");

    }

});


//================ Scroll To Top =================//

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "flex";

        scrollBtn.style.justifyContent = "center";

        scrollBtn.style.alignItems = "center";

    }

    else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

