// =====================================
// AKI MEHARU - PORTFOLIO JAVASCRIPT
// =====================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


// 2. CLOSE MENU AFTER CLICKING A LINK

    const navigationItems = document.querySelectorAll(".nav-links a");

    navigationItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";

        });

    });

}


// 3. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 4. WELCOME MESSAGE

console.log("Welcome to Aki Meharu's Portfolio!");
console.log("Built with HTML, CSS and JavaScript.");


// 5. TYPEWRITER ANIMATION

const words = [
    "Web Developer",
    "Digital Marketer",
    "Creative Technologist",
    "Tech Enthusiast",
    "AI Enthusiast",
    "Full-Stack Developer",
    "Problem Solver",
    "Aspiring AI Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500;
        isDeleting = true;
    }

    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);

}

if (typingElement) {
    typeEffect();
}
