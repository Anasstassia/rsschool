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

console.log(`Score: 120 / 150

    Вёрстка валидная +10
    Вёрстка семантическая. +24
    Вёрстка соответствует макету +40/45
    Форма покупки билетов 0/22
    Требования к css + 18
    добавлен favicon +2
    для построения сетки используются флексы или гриды +2
    при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
    фоновый цвет каждого блока и секции тянется на всю ширину страницы +2
    иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2
    расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing +2
    переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка +2
    в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel +2
    в футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css +2
    Интерактивность, реализуемая через css +25
    плавная прокрутка по якорям +5
    параллакс +5
    при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe +5
    изменение стиля интерактивных элементов при наведении и клике +10
    изменение цвета фона или шрифта, появление подчёркивания и т.д. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. +4
    обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +2
    интерактивность при наведении карточек в секции Visiting предусматривает плавное растягивание подчёркивания заголовка карточки на всю ширину карточки Демо +2
    интерактивность при наведении иконок социальных сетей в футере предусматривает изменение цвета иконки и круглой границы вокруг иконки на золотистый +2
    Интерактивность, реализуемая через js +16
    можно передвигать ползунки громкости и прогресс-бар видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету +2
    кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20 +2
    кнопке "Book" в форме покупки билетов добавлен ripple-эффект Демо 0/2
    при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке 0/10`);

let navIsVisible = false;
const nav = document.querySelector(".nav-header");
const content = document.querySelector("#Welcome .heading-text-container");
const burger = document.querySelector(".burger-menu");
const slider = document.querySelector("#Welcome .slider-container");

document.querySelector(".burger-menu").addEventListener("click", () => {
  if (+nav.style.opacity === 0) {
    if (window.innerWidth <= 768) {
      slider.style.opacity = 0;
    }
    burger.classList.remove("burger-open");
    burger.classList.add("burger-close");

    setTimeout(() => {
      navIsVisible = true;
      nav.style.opacity = 1;
    }, 300);
    content.style.opacity = 0;
  } else {
    if (window.innerWidth <= 768) {
      slider.style.opacity = 1;
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

document.querySelector("body").addEventListener("click", (e) => {
  if (navIsVisible) {
    if (window.innerWidth <= 768) {
      slider.style.opacity = 1;
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
