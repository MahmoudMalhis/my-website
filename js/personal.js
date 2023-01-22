let link = document.querySelectorAll("nav .sidebar .link li a");
link.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.target.parentElement.parentElement
      .querySelectorAll(".active")
      .forEach((e) => {
        e.classList.remove("active");
      });
    e.target.classList.add("active");
    querySelector("nav .sidebar").classList.remove("visible");
  });
});

let mainSection = document.querySelectorAll("section");
link.forEach((link) => {
  link.addEventListener("click", (e) => {
    mainSection.forEach((e) => {
      if (link.dataset.id === e.id) {
        e.classList.add("hidden");
      }
      if (link.dataset.id !== e.id) {
        e.classList.remove("hidden");
      }
    });
  });
});

let about = document.querySelector("section .home .box .content .button");
about.addEventListener("click", function () {
  mainSection.forEach((e) => {
    if (about.dataset.id === e.id) {
      e.classList.add("hidden");
    }
    if (about.dataset.id !== e.id) {
      e.classList.remove("hidden");
    }
  });
  link.forEach((e) => {
    if (about.dataset.id === e.dataset.id) {
      e.classList.add("active");
    }
    if (about.dataset.id !== e.dataset.id) {
      e.classList.remove("active");
    }
  });
});

window.addEventListener("load", function () {
  document
    .querySelectorAll(".about .box .skills .skill .data span")
    .forEach((e) => {
      e.style.width = e.dataset.progress;
    });
});

let localAlt = localStorage.getItem("alt-img");
let image = document.querySelector("nav .image img");
let span = document.querySelector("nav .image span");
console.log(image.alt);
if (localAlt) {
  image.setAttribute("src", localAlt);
}
image.addEventListener("click", function () {
  localStorage.setItem("localAlt", image.src);
  if (image.alt === "light") {
    image.src = "image/dark.png";
    image.alt = "dark";
  } else {
    image.src = "image/light.png";
    image.alt = "light";
  }
  span.innerHTML = image.alt;
});

document.querySelector("nav .icon i").addEventListener("click", function () {
  console.log("aa");
  document.querySelector("nav .sidebar").classList.add("visible");
});
