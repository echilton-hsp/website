const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("nav-open");

    const isOpen = mainNav.classList.contains("nav-open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
}