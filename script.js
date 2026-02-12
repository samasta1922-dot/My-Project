document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SELECTORS
  ========================= */

  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");
  const navMenu = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");
  const sections = document.querySelectorAll("section");
  const revealElements = document.querySelectorAll(
    ".about, .skills, .portfolio, .contact"
  );
  const form = document.querySelector(".contact-form");


  /* =========================
     SMOOTH SCROLL
  ========================= */

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth"
        });

        // Tutup menu mobile setelah klik
        if (navMenu) navMenu.classList.remove("active");
        if (hamburger) hamburger.classList.remove("active");
      }
    });
  });


  /* =========================
     NAVBAR SHRINK (SCROLL)
  ========================= */

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }

    highlightActiveLink();
    revealOnScroll();
  });


  /* =========================
     ACTIVE NAV LINK
  ========================= */

  function highlightActiveLink() {

    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }


  /* =========================
     HAMBURGER MENU
  ========================= */

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }


  /* =========================
     SCROLL REVEAL
  ========================= */

  function revealOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        element.classList.add("show");
      }
    });
  }

  // Set initial hidden state
  revealElements.forEach(element => {
    element.classList.add("hidden");
  });


  /* =========================
     CONTACT FORM (DEMO)
  ========================= */

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Pesan berhasil dikirim!");
      form.reset();
    });
  }

});