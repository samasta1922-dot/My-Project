//Load the DOM content before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    /* ========================= NAVIGATION MENU TOGGLE ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navLinksContainer = document.getElementById("nav-Links");

    menuToggle.addEventListener("click", () => {
        navLinksContainer.classList.toggle("active");
    });
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinksContainer.classList.remove("active");
        });
    });
});

/* =========================
   SMOOTH SCROLLING
========================= */
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    }); 
});