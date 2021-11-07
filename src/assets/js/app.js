const body = document.body;
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  body.classList.toggle("no-scroll");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    fadeElems.forEach(function (elem) {
      elem.classList.remove("fade-in");
      elem.classList.add("fade-out");
    });
  } else {
    header.classList.add("open");
    fadeElems.forEach(function (elem) {
      elem.classList.remove("fade-out");
      elem.classList.add("fade-in");
    });
  }
});
