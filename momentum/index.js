const imgsUrl =
  "https://raw.githubusercontent.com/Anasstassia/stage1-tasks/assets/images/";

/*------------------------------ Отображение времени------------------------------------- */

function showTime() {
  const time = document.querySelector(".time");
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  setTimeout(showTime, 1000);
  showGreeting();
}
showTime();

/*------------------------------ Отображение даты------------------------------------- */

function showDate() {
  const dateSelector = document.querySelector(".date");
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString("en-US", options);
  dateSelector.textContent = currentDate;
}

/*------------------------------ Приветствие в соответствии со временем   ------------------------------------- */

function showGreeting() {
  const greeting = document.querySelector(".greeting");
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}, `;
  greeting.textContent = greetingText;
}

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours === 24 || hours < 6) {
    return "night";
  }
  if (hours < 12) {
    return "morning";
  }
  if (hours < 18) {
    return "afternoon";
  }
  if (hours < 24) {
    return "evening";
  }
}

/*------------------------------ Запись имени пользователя в ЛС------------------------------------- */

//перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить

const name = document.querySelector(".name");
function setLocalStorage() {
  localStorage.setItem("name", name.value);
}
window.addEventListener("beforeunload", setLocalStorage);

//перед загрузкой страницы (событие load) данные нужно восстановить и отобразить

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);

/*------------------------------ Слайдер на бекграунде------------------------------------- */

let randomNum;
randomNum = getRandomNum();

function getRandomNum() {
  min = 1;
  max = 20;
  const rnd = Math.floor(Math.random() * (max - min + 1)) + min;
  return rnd;
}

function setBg() {
  const timeOfDay = getTimeOfDay();
  const bgNum = randomNum < 10 ? `0${randomNum}` : randomNum;

  const img = new Image();
  const url = `${imgsUrl}${timeOfDay}/${bgNum}.jpg`;
  img.src = url;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${url})`;
  };
}
setBg();

function getSlideNext() {
  if (+randomNum === 20) {
    randomNum = 0;
  }
  randomNum++;
  setBg();
}

function getSlidePrev() {
  if (+randomNum === 1) {
    randomNum = 21;
  }
  randomNum--;
  setBg();
}

//вызываем смену слайдов при клике

const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");

slideNext.addEventListener("click", getSlideNext);
slidePrev.addEventListener("click", getSlidePrev);
