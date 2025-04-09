const jobTitle = document.querySelector("h3");
const text = "Frontend Developer";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    jobTitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
jobTitle.textContent = "";
typeWriter();

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  hero.style.opacity = "1";
  hero.style.transform = "translateY(0)";
});
