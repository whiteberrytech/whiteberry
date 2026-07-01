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
}, { threshold: 0.14 });

revealElements.forEach((element) => observer.observe(element));

const panel = document.querySelector(".hero-panel");
if (panel) {
  panel.addEventListener("mousemove", (event) => {
    const rect = panel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    panel.style.transform = `perspective(1000px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
  });
  panel.addEventListener("mouseleave", () => {
    panel.style.transform = "";
  });
}
