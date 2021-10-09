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

mapboxgl.accessToken =
  "pk.eyJ1IjoibmFzdGlrNzUiLCJhIjoiY2t1anBrb3dhMG04NTJvcnYwbHk2eXRvMSJ9.PV0Hrr4rnJt14EjR57JXUg";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [2.3364, 48.86091],
  zoom: 15.75,
});

// Create a default Marker and add it to the map.

const marker0 = new mapboxgl.Marker({ color: "black" })
  .setLngLat([2.3364, 48.86091])
  .addTo(map);

const marker1 = new mapboxgl.Marker({ color: "grey" })
  .setLngLat([2.3333, 48.8602])
  .addTo(map);

const marker2 = new mapboxgl.Marker({ color: "grey" })
  .setLngLat([2.3397, 48.8607])
  .addTo(map);

const marker3 = new mapboxgl.Marker({ color: "grey" })
  .setLngLat([2.333, 48.8619])
  .addTo(map);

const marker4 = new mapboxgl.Marker({ color: "grey" })
  .setLngLat([2.3365, 48.8625])
  .addTo(map);

map.addControl(new mapboxgl.NavigationControl());

// СЛАЙДЕР Welcomes
const imgs = [
  "./assets/img/Welcome-slider/1.jpg",
  "./assets/img/Welcome-slider/2.jpeg",
  "./assets/img/Welcome-slider/3.jpeg",
  "./assets/img/Welcome-slider/4.jpeg",
  "./assets/img/Welcome-slider/5.jpeg",
];
let current = 0;
const setCurrent = (newValue) => {
  current = newValue;
  document.querySelector("#current").innerHTML = `0${current + 1}`;
};

document.querySelector("img").src = imgs[current];
document.querySelector(".right-arrow").addEventListener("click", () => {
  if (imgs[current + 1]) {
    document.querySelector("img").src = imgs[current + 1];
    setCurrent(current + 1);
  } else {
    setCurrent(0);
    document.querySelector("img").src = imgs[current];
  }

  handleChangeBullet();
});

document.querySelector(".left-arrow").addEventListener("click", () => {
  if (imgs[current - 1]) {
    document.querySelector("img").src = imgs[current - 1];
    setCurrent(current - 1);
  } else {
    setCurrent(imgs.length - 1);
    document.querySelector("img").src = imgs[current];
  }

  handleChangeBullet();
});

document.querySelectorAll(".square-bullet").forEach((bullet, i) => {
  bullet.addEventListener("click", () => {
    const currentBullet = document.querySelector(".square-bullet_1");

    currentBullet.classList.remove("square-bullet_1");

    bullet.classList.add("square-bullet_1");

    setCurrent(i);
    document.querySelector("img").src = imgs[current];
  });
});

const handleChangeBullet = () => {
  document
    .querySelector(".square-bullet_1")
    .classList.remove("square-bullet_1");
  document
    .querySelectorAll(".square-bullet")
    [current].classList.add("square-bullet_1");
};
