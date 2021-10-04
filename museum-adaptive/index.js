document.querySelector(".progress").addEventListener("input", function (e) {
  const value = e.target.value;
  e.target.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
});

document
  .querySelector(".volume-progress")
  .addEventListener("input", function (e) {
    const value = e.target.value;
    e.target.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
  });

document.querySelector(".slider").addEventListener("input", (e) => {
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  document.querySelector(".foreground-img").style.width = `${sliderPos}%`;
  // Update the position of the slider button
  document.querySelector(
    ".slider-button"
  ).style.left = `calc(${sliderPos}% - 24px)`;
});

[
  ["header", 1, 1],
  ["main", 1, 1],
  ["footer", 1, 1],
  ["section", 7, Infinity],
  ["h1", 1, 1],
  ["h2", 7, Infinity],
  ["h3", 6, Infinity],
  ["nav", 2, Infinity],
  ["ul", 3, Infinity],
  ["ul > li > a", 16, Infinity],
  ["button", 13, Infinity],
  ['input[type="radio"]', 3, Infinity],
  ['input[type="number"]', 2, Infinity],
  ['input[type="range"]', 2, Infinity],
]
  .map((x) => [...x, [...document.querySelectorAll(x[0])].length])
  .map((x) =>
    x[3] >= x[1] && x[3] <= x[2]
      ? `✔ ${x[0]} (${x[3]})`
      : `✘ ${x[0]} (expected - ${x[1]}, actual - ${x[3]})`
  )
  .forEach((x) => console.log(x)),
  (alts = [...document.querySelectorAll("img")]
    .map((el) => el.getAttribute("alt"))
    .reduce((a, v) => [a[0] + 1, v !== undefined ? a[1] : a[1] + 1], [0, 0])),
  console.log(
    alts[1] > 0
      ? `✘ ${alts[1]} of ${alts[0]} images haven't "alt" attribute`
      : `✔ All images have "alt" attribute`
  );

console.log(``);

// adaptive

let navIsVisible = false;
const nav = document.querySelector(".nav-header");
const content = document.querySelector("#Welcome .heading-text-container");
const burger = document.querySelector(".burger-menu");
const slider = document.querySelector("#Welcome .slider-container");
const controls = document.querySelector(".counter-pic");
const menuPictures = document.querySelector(".menu-pictures");

// menuPictures.style.opacity = 0;
document.querySelector(".burger-menu").addEventListener("click", () => {
  console.log(nav);
  if (+nav.style.opacity === 0) {
    if (window.innerWidth <= 768) {
      slider.style.opacity = 0;
      controls.style.opacity = 0;
    }
    burger.classList.remove("burger-open");
    burger.classList.add("burger-close");

    setTimeout(() => {
      navIsVisible = true;
      nav.style.opacity = 1;
      // slider.style.height = "110px";
      menuPictures.style.opacity = 1;
    }, 300);
    content.style.opacity = 0;
  } else {
    if (window.innerWidth <= 768) {
      slider.style.opacity = 1;
      controls.style.opacity = 1;
      // menuPictures.style.opacity = 0;
    }
    burger.classList.remove("burger-close");
    burger.classList.add("burger-open");
    nav.style.opacity = 0;
    menuPictures.style.opacity = 0;
    // slider.style.height = "auto";
    setTimeout(() => {
      navIsVisible = false;
      content.style.opacity = 1;
    }, 300);
  }
});

document.querySelector("body").addEventListener("click", (e) => {
  if (navIsVisible) {
    if (window.innerWidth <= 768) {
      slider.style.opacity = 1;
      controls.style.opacity = 1;
      // menuPictures.style.opacity = 0;
    }
    burger.classList.remove("burger-close");
    burger.classList.add("burger-open");
    nav.style.opacity = 0;
    setTimeout(() => {
      navIsVisible = false;
      content.style.opacity = 1;
    }, 300);
  }
});
