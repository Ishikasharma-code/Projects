 // ===== Typing Animation =====
const typingText = "Hi, I'm Ishika Sharma!";
let i = 0;

function typeEffect() {
  if (i < typingText.length) {
    document.getElementById("typing-text").textContent += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;

// ===== Mobile Nav Toggle =====
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Fade-in on Scroll =====
const sections = document.querySelectorAll('.section');

function showOnScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
