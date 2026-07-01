const ambient = document.querySelector(".ambient");

window.addEventListener("mousemove", (event) => {
  ambient.style.left = event.clientX + "px";
  ambient.style.top = event.clientY + "px";
});

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.13 });

revealElements.forEach((el) => observer.observe(el));
