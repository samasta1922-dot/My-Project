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