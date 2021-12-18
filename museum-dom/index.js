/*------------------------------PRELOADER----------------------------------*/
let images = document.images;
let images_total_count = images.length;
let images_loaded_count = 0;
perc_display = document.getElementById("load_perc");

for (let i = 0; i < images_total_count; i++) {
  image_clone = new Image();
  image_clone.onload = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src = images[i].src;
}

function image_loaded() {
  images_loaded_count++;
  perc_display.innerHTML =
    (((100 / images_total_count) * images_loaded_count) << 0) + "%";

  if (images_loaded_count >= images_total_count) {
    setTimeout(function () {
      let preloader = document.getElementById("page-preloader");
      if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
      }
    }, 1000);
  }
}

/*--------------------VIDEO CONTROLS---------------------------------------------------- */
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

/* ------------------ADAPTIVE BURGER MENU -----------------------------------------------------*/

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

//*------------------------------------ СЛАЙДЕР WELCOME------------------------------------------- *//

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

//* --------------------SLIDER VIDEO --------------------------------------------------*//
const videos = [
  '<iframe width="452" height="254" src="https://www.youtube.com/embed/aWmJ5DgyWPI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe width="452" height="254" src="https://www.youtube.com/embed/Vi5D6FKhRmo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe width="452" height="254" src="https://www.youtube.com/embed/NOhDysLnTvY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe width="452" height="254" src="https://www.youtube.com/embed/zp1BXPX8jcU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe width="452" height="254" src="https://www.youtube.com/embed/2OR0OCr6uRE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // "https://youtu.be/zp1BXPX8jcU",
  // "https://youtu.be/Vi5D6FKhRmo",
  // "https://youtu.be/NOhDysLnTvY",
  // "https://youtu.be/aWmJ5DgyWPI",
  // "https://youtu.be/2OR0OCr6uRE",
];
let [first, second, last] = [0, 1, 2];
const setCurrentVideos = (newValueVideo) => {
  // currentVideo = newValueVideo;
  switch (newValueVideo) {
    case newValueVideo > 0 || newValueVideo < 0:
      [first, second, last] = [first, second, last].map(
        (value) => value + newValueVideo
      );
      document.querySelector("#current1").innerHTML = `${
        first + newValueVideo
      }`;
      document.querySelector("#current2").innerHTML = `${
        second + newValueVideo
      }`;
      document.querySelector("#current3").innerHTML = `${last + newValueVideo}`;
      break;

    case 0:
      [first, second, last] = [first, second, last].map((value, i) => i + 1);
      document.querySelector("#current1").innerHTML = `${0}`;
      document.querySelector("#current2").innerHTML = `${1}`;
      document.querySelector("#current3").innerHTML = `${2}`;
      break;
  }
};
// document.querySelector("swiper-slide1").src = videos[currentVideo1];
// document.querySelector("swiper-slide2").src = videos[currentVideo2];
// document.querySelector("swiper-slide3").src = videos[currentVideo3];
// document.querySelector("#current").innerHTML = `0${current + 1}`;

document.querySelector(".right-scroll").addEventListener("click", () => {
  if (videos[last + 1]) {
    document.querySelector("#current1").innerHTML = videos[first + 1];
    document.querySelector("#current2").innerHTML = videos[second + 1];
    document.querySelector("#current3").innerHTML = videos[last + 1];
    setCurrentVideos(currentVideo + 1);
  } else {
    setCurrentVideos(0);
    document.querySelector("#current1").innerHTML = videos[fist];
    document.querySelector("#current2").innerHTML = videos[second];
    document.querySelector("#current3").innerHTML = videos[last];
  }
  handleChangeVideoBullet();
});

document.querySelector(".left-scroll").addEventListener("click", () => {
  if (videos[currentVideo - 3]) {
    document.querySelector("#current1").innerHTML = videos[currentVideo - 1];
    document.querySelector("#current2").innerHTML = videos[currentVideo - 2];
    document.querySelector("#current3").innerHTML = videos[currentVideo - 3];
  } else {
    setCurrentVideos(videos.length - 1);
    document.querySelector("#current1").innerHTML = videos[currentVideo];
    document.querySelector("#current2").innerHTML = videos[currentVideo + 1];
    document.querySelector("#current3").innerHTML = videos[currentVideo + 2];
  }

  handleChangeVideoBullet();
});

document.querySelectorAll(".circle-control").forEach((bullet, i) => {
  bullet.addEventListener("click", () => {
    const currentBulletVideo = document.querySelector(".dark");
    currentBulletVideo.classList.remove("dark");
    bullet.classList.add("dark");
    setCurrentVideos(i);
    document.querySelector("#current1").innerHTML = videos[currentVideo];
    document.querySelector("#current2").innerHTML = videos[currentVideo + 1];
    document.querySelector("#current3").innerHTML = videos[currentVideo + 2];
  });
});

const handleChangeVideoBullet = () => {
  document.querySelector(".dark").classList.remove("dark");
  document
    .querySelectorAll(".circle-control")
    [currentVideo].classList.add("dark");
};

/*-------------- GALLERY DEBOUNCE ---------------------------*/
const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = animItemHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset
      ) {
        animItem.classList.add("_active");
      }
      if (scrollY < 3700) {
        animItem.classList.remove("_active");
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
    };
  }
  animOnScroll();
}

/*--------------PRICE COUNTER---------------------------------------------*/

/* Model */
const prices = [20, 25, 40];
let currentPrice = getInitialPrice();
const types = ["basic", "senior"];
const actions = [-1, 1];
const tickets = getInitialTickets();

/* View elements */
const perma = document.querySelector("#perma");
const tempo = document.querySelector("#tempo");
const combi = document.querySelector("#combi");

const basicDown = document.querySelector("#basicDown");
const basicUp = document.querySelector("#basicUp");
const seniorDown = document.querySelector("#seniorDown");
const seniorUp = document.querySelector("#seniorUp");
const basic = document.querySelector("#basic");
const senior = document.querySelector("#senior");
const total = document.querySelector("#total");
const inputs = [basic, senior];
/* Init view */

initView();

/* Init controllers */
priceController();
ticketsController();

/* Controllers */
function priceController() {
  [perma, tempo, combi].forEach((el, i) => {
    el.addEventListener("change", ({ target: { checked } }) => {
      if (checked) {
        setCurrentPrice(prices[i]);
        setTotalPrice();
      }
    });
  });
}

function ticketsController() {
  [
    [basicDown, basicUp],
    [seniorDown, seniorUp],
  ].forEach((arr, arrayType) => {
    arr.forEach((el, elType) => {
      el.addEventListener("click", (event) => {
        const value = actions[elType] + tickets[arrayType];
        setTickets(value, arrayType);
        setTotalPrice();
      });
    });
  });
}

/* Helpers */
function setTickets(value, ticketsType) {
  const newValue = value >= 0 ? (value > 20 ? 20 : value) : 0;
  if (value <= 20 && value >= 0) {
    tickets[ticketsType] = value;
  }
  saveToLocalStorage("tickets", tickets);
  inputs[ticketsType].value = String(newValue);
}

function setCurrentPrice(price) {
  currentPrice = price;
  saveToLocalStorage("price", currentPrice);
}

function setTotalPrice() {
  total.innerHTML = `€${calcTotalPrice()}`;
}

function calcTotalPrice() {
  return tickets[0] * currentPrice + (tickets[1] * currentPrice) / 2;
}

function initView() {
  [perma, tempo, combi].forEach((el, i) => {
    if (prices.indexOf(currentPrice) === i) {
      el.checked = true;
    }
  });
  inputs.forEach((el, i) => {
    el.value = tickets[i];
  });
  setTotalPrice();
}

/* Local Storage */
function getInitialTickets() {
  if (localStorage.getItem("tickets")) {
    return JSON.parse(localStorage.getItem("tickets"));
  }
  return [0, 0];
}

function getInitialPrice() {
  if (localStorage.getItem("price")) {
    return JSON.parse(localStorage.getItem("price"));
  }
  return prices[0];
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

setTimeout(() => {
  alert(
    "Привет:) Из доп. функционала - прелоадер  загрузки\nСлайдер welcome требует немного времени, чтобы полностью загрузиться, иначе он немного тормозит"
  );
}, 3500);
