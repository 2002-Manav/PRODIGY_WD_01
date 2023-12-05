// Get the navigation bar element
const navbar = document.getElementById("navbar");

// Add a scroll event listener to change style on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Add a hover event listener to change style on hover
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#555";
  });

  item.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "";
  });
});
