// ===== RETRO DEV PORTFOLIO =====

// Typewriter effect
const typedText = document.getElementById("typed-text");

const phrases = [
  "writing code, breaking it, fixing it...",
  "living the young corporate life...",
  "debugging my way through logs...",
  "turning my enthusiasm into passion...",
  "getting better along the way..."
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {
  const phrase = phrases[phraseIndex];

  if (!deleting) {
    typedText.textContent = phrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === phrase.length) {
      deleting = true;
      setTimeout(typeWriter, 1500);
      return;
    }
  } else {
    typedText.textContent = phrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeWriter, deleting ? 35 : 65);
}

typeWriter();

// Mouse glow
const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Add a tiny terminal-style reveal as sections enter the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".section-heading, .skill-card, .project-card, .timeline-item, .contact-terminal").forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(18px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(element);
});
const trail = document.getElementById("cursor-trail");

const colors = [
  "#79ff9b",
  "#6be7ff",
  "#ff6bd6",
  "#ffe66b"
];

let lastParticle = 0;

document.addEventListener("mousemove", (e) => {
  const now = Date.now();

  if (now - lastParticle < 25) return;

  lastParticle = now;

  const particle = document.createElement("span");
  particle.className = "cursor-particle";

  const color = colors[Math.floor(Math.random() * colors.length)];

  particle.style.left = `${e.clientX}px`;
  particle.style.top = `${e.clientY}px`;
  particle.style.background = color;
  particle.style.boxShadow = `0 0 8px ${color}, 0 0 16px ${color}`;

  trail.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 800);
});

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});
