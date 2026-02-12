/* =========================
   SMOOTH SCROLL
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


/* =========================
   NAVBAR SHRINK
========================= */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = "12px 0";
    navbar.style.background = "rgba(10,10,10,0.95)";
  } else {
    navbar.style.padding = "20px 0";
    navbar.style.background = "rgba(15,15,15,0.85)";
  }
});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "./css/" + currentSection) {
      link.classList.add("active");
    }

    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
      hamburger.classList.remove("active");
    }
    const navLinks= document.getElementById("nav-Links");
    if (navLinks) {
      navLinks.classList.remove("active");
    }

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  });
});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".about, .skills, .portfolio, .contact"
);

const revealOnScroll = () => {

  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });

};

revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);


/* =========================
   CONTACT FORM (DEMO MODE)
========================= */

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan berhasil dikirim! ");
    form.reset();
  });
}
