const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
const githubIcon = document.querySelector(".github-icon");
const linkedinIcon = document.querySelector(".linkedin-icon");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".contact-btn");
const rainyDaysLive = document.querySelector(".rainyDaysLive");
const rainyDaysRepo = document.querySelector(".rainyDaysRepo");
const semesterProjectLive = document.querySelector(".semesterProjectLive");
const semesterProjectRepo = document.querySelector(".semesterProjectRepo");
const javaScriptLive = document.querySelector(".javaScriptLive");
const javaScriptRepo = document.querySelector(".javaScriptRepo");

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("form submitted");

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  submitBtn.textContent = "Sending...";
  const serviceID = "service_fsg9si6";
  const templateID = "template_6kt7bmf";

  emailjs.send(serviceID, templateID, params).then(
    () => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      submitBtn.textContent = "Send";
      alert("Message sent successfully!");
    },
    (err) => {
      submitBtn.textContent = "Send";
      alert("Error:" + JSON.stringify(err));
    }
  );
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

if (submitBtn) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleSubmit(e);
  });
}

if (menuIcon) {
  menuIcon.onclick = () => {
    navLinks.classList.toggle("active");
  };
}

if (githubIcon) {
  githubIcon.onclick = () => {
    window.open("https://github.com/Liz-nor");
  };
}

if (linkedinIcon) {
  linkedinIcon.onclick = () => {
    window.open("https://www.linkedin.com/in/lise-ervik-9b688b237/");
  };
}

if (rainyDaysLive) {
  rainyDaysLive.onclick = () => {
    window.open("https://liz-nor.github.io/html-css-lise-ervik2/");
  };
}
if (rainyDaysRepo) {
  rainyDaysRepo.onclick = () => {
    window.open("https://github.com/Liz-nor/html-css-lise-ervik2");
  };
}
if (semesterProjectLive) {
  semesterProjectLive.onclick = () => {
    window.open("https://liz-nor.github.io/semester-project/");
  };
}
if (semesterProjectRepo) {
  semesterProjectRepo.onclick = () => {
    window.open("https://github.com/Liz-nor/semester-project");
  };
}
if (javaScriptLive) {
  javaScriptLive.onclick = () => {
    window.open("https://liz-nor.github.io/CA-JS/");
  };
}
if (javaScriptRepo) {
  javaScriptRepo.onclick = () => {
    window.open("https://github.com/Liz-nor/CA-JS");
  };
}
