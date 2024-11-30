// Typing Effect for Hero Section
const heroRole = document.getElementById("heroRole");
const roles = [
  "Placement Coordinator at PIEMR",
  "Student Prestige Institute of Engineering Management and Research",
  "Cybersecurity Enthusiast",
  "Web Developer"
];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    heroRole.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 2000);
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    heroRole.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 1000);
  }
}

typeEffect();

// Toggle Sidebar
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});
