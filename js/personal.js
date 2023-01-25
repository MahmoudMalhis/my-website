let link = document.querySelectorAll("nav .sidebar .link li a");
let icon = document.querySelector("nav .sidebar");

link.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.target.parentElement.parentElement
      .querySelectorAll(".active")
      .forEach((e) => {
        e.classList.remove("active");
      });
    e.target.classList.add("active");
    icon.classList.remove("visible");
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

let image = document.querySelector("nav .image img");
let span = document.querySelector("nav .image span");

image.addEventListener("click", function () {
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
  document.querySelector("nav .sidebar").classList.toggle("visible");
});

let img = document
  .querySelectorAll("#portfolio .image img")
  .forEach((image) => {
    image.addEventListener("click", function () {
      let overlay = document.createElement("div");
      let div = document.createElement("div");
      let img = document.createElement("img");
      let a = document.createElement("a");
      let git = document.createElement("a");
      let p = document.createElement("p");
      let icon = document.createElement("i");
      let left = document.createElement("i");
      let right = document.createElement("i");
      let buttonBox = document.createElement("div");
      buttonBox.className = "buttonBox";
      right.className = "fa-regular fa-chevron-right right btn";
      left.className = "fa-regular fa-chevron-left left btn";
      icon.className = "fa-sharp fa-solid fa-xmark";
      overlay.className = "overlay";
      div.className = "new-box";
      img.className = "new-img";
      a.className = "new-link";
      git.className = "git";
      img.src = image.src;
      a.href = image.dataset.link;
      git.href = image.dataset.git;
      a.target = "_blank";
      git.target = "_blank";
      a.innerHTML = "link";
      git.innerHTML = "Source code";
      pra = image.nextElementSibling.innerHTML;
      p.innerHTML = pra;
      console.log(pra);
      icon.addEventListener("click", () => {
        document.body.removeChild(div);
        document.body.removeChild(overlay);
      });
      let counter = 0;
      let imageArray = document.querySelectorAll(
        "#portfolio .image div div img"
      );
      left.addEventListener("click", () => {
        counter--;
        if (counter < 0) {
          counter = imageArray.length - 1;
        }
        img.src = imageArray[counter].src;
        git.href = imageArray[counter].dataset.git;
        a.href = imageArray[counter].dataset.link;
        p.innerHTML = imageArray[counter].nextElementSibling.innerHTML;
      });
      right.addEventListener("click", () => {
        counter++;
        if (counter > imageArray.length - 1) {
          counter = 0;
        }
        img.src = imageArray[counter].src;
        git.href = imageArray[counter].dataset.git;
        a.href = imageArray[counter].dataset.link;
        p.innerHTML = imageArray[counter].nextElementSibling.innerHTML;
      });
      div.appendChild(right);
      div.appendChild(left);
      div.appendChild(icon);
      div.appendChild(img);
      div.appendChild(p);
      buttonBox.appendChild(a);
      buttonBox.appendChild(git);
      div.appendChild(buttonBox);
      document.body.appendChild(div);
      document.body.appendChild(overlay);
    });
  });
