const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
const githubIcon = document.querySelector(".github-icon");
const linkedinIcon = document.querySelector(".linkedin-icon");
const contactMe = document.querySelector("");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

githubIcon.onclick = () => {
  window.open("https://github.com/Liz-nor");
};

linkedinIcon.onclick = () => {
  window.open("https://www.linkedin.com/in/lise-ervik-9b688b237/");
};
