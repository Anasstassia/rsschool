import playList from "./playList";
import { greetingTranslation } from "./lang";
import json from "./data.json";
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};

let currentDate;

const imgsUrl =
  "https://raw.githubusercontent.com/Anasstassia/stage1-tasks/assets/images/";

const placeHold = {
  en: "[Enter your name]",
  ru: "[Введите ваше имя]",
};
/*------------------------------ Отображение времени------------------------------------- */
const inputPlace = document.querySelector(".name");
let language;

function showTime() {
  const time = document.querySelector(".time");
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate(currentDate);
  setTimeout(showTime, 1000);
  showGreeting(language);
}

showTime();

/*------------------------------ Отображение даты------------------------------------- */

function showDate(dateLang = "en-EN") {
  console.log(dateLang);
  const dateSelector = document.querySelector(".date");
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString(`${dateLang}`, options);
  dateSelector.textContent = currentDate;
}

/*------------------------------ Приветствие в соответствии со временем   ------------------------------------- */

function showGreeting(language = "en") {
  const greeting = document.querySelector(".greeting");
  const timeOfDay = getTimeOfDay();
  greeting.textContent = greetingTranslation[language][timeOfDay];
  inputPlace.placeholder = placeHold[language];
}

function getPartOfDay() {
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

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours === 24 || hours < 6) {
    return 0;
  }
  if (hours < 12) {
    return 1;
  }
  if (hours < 18) {
    return 2;
  }
  if (hours < 24) {
    return 3;
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
randomNum = getRandomNum(1, 20);

function getRandomNum(min, max) {
  //   min = 1;
  //   max = 20;
  const rnd = Math.floor(Math.random() * (max - min + 1)) + min;
  return rnd;
}

function setBg() {
  const timeOfDay = getPartOfDay();
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

/*------------------------------ Виджет погоды------------------------------------- */

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherDescription = document.querySelector(".weather-description");
const cityElement = document.querySelector(".city");
const errorWeather = document.querySelector(".weather-error");

async function getWeather(city, language = "en") {
  cityElement.value = city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=ba499dceea3b725ead8e60cb81d7ecb1&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  //ловим ошибку при неверном городе
  if (data.cod !== 200) {
    errorWeather.textContent = "Введите верный город";
    temperature.textContent = ``;
    weatherDescription.textContent = ``;
    wind.textContent = ``;
    humidity.textContent = ``;
    weatherIcon.className = "";
  } else {
    errorWeather.textContent = "";
    localStorage.setItem("city", city);
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
    if (language === "ru") {
      wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
      humidity.textContent = `Влажность: ${Math.round(data.main.humidity)} %`;
    }
  }
}

getWeather(localStorage.getItem("city") || "Minsk");

// Ввод пользователем города для погоды
function setCity(event) {
  getWeather(event.target.value);
}
cityElement.addEventListener("change", setCity);

/*------------------------------ Цитаты------------------------------------- */

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");
getQuotes(language);

async function getQuotes(language = "en") {
  let data;
  const n = getRandomNum(1, 100);
  if (language === "en") {
    const quotes_ =
      "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const res = await fetch(quotes_);
    data = await res.json();
  } else {
    data = json;
  }
  quote.textContent = data.quotes[n]?.quote || data.quotes[0].quote;
  author.textContent = data.quotes[n]?.author || data.quotes[0].author;
}

//по кнопке меняем цитату
changeQuote.addEventListener("click", () => getQuotes(language));

/*------------------------------ Аудиоплеер ------------------------------------- */
const nameMusic = document.querySelector(".name-music");
const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".play-prev");
const nextBtn = document.querySelector(".play-next");
const audio = new Audio();
let isPlay = false;
let playNum = 0;

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.onended = function () {
    this.src = playList[playNum + 1].src;
    playNext();
  };
  if (!isPlay) {
    pauseBtn();
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
  document
    .querySelectorAll(".play-item")
    .forEach((el) => el.classList.remove("item-active"));

  document.querySelectorAll(".play-item")[playNum].classList.add("item-active");

  nameMusic.textContent = playList[playNum].title;
}

function pauseBtn() {
  if (!isPlay) {
    playBtn.classList.add("pause");
  } else {
    playBtn.classList.remove("pause");
  }
}

playBtn.addEventListener("click", pauseBtn);
playBtn.addEventListener("click", playAudio);

function playPrev() {
  isPlay = false;

  if (playNum === 0) {
    playNum = 3;
  } else {
    playNum--;
  }
  playAudio();
}

function playNext() {
  isPlay = false;

  if (playNum === 3) {
    playNum = 0;
  } else {
    playNum++;
  }
  playAudio();
}

nextBtn.addEventListener("click", () => {
  playNext();
});

prevBtn.addEventListener("click", () => {
  playPrev();
});

//добавляем плейлист
const playListContainer = document.querySelector(".play-list");
playList.forEach((el, i) => {
  const li = document.createElement("li");
  li.classList.add("play-item");
  li.textContent = `${playList[i].title}`;
  playListContainer.append(li);
});

//c codePen плеер
const audioPlayer = document.querySelector(".audio-player");

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time-music .length").textContent =
      getTimeCodeFromNum(audio.duration);
    audio.volume = 0.75;
  },
  false
);

const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener(
  "click",
  (e) => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
  },
  false
);

setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  audioPlayer.querySelector(".time-music .current").textContent =
    getTimeCodeFromNum(audio.currentTime);
}, 500);

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

// погресс бар звука

const volumeSlider = audioPlayer.querySelector(".volume-slider");
volumeSlider.addEventListener(
  "click",
  (e) => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;

    audioPlayer.querySelector(".volume-percentage").style.width =
      newVolume * 100 + "%";
  },
  false
);

//вкл выкл звук плеера

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-button");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.add("background-mute");
  } else {
    volumeEl.classList.remove("background-mute");
  }
});

/* -----------------------------------Settings------------------------------------------------- */
const settingsBtn = document.querySelector(".settings");
const menu = document.querySelector(".settings-menu");
settingsBtn.addEventListener("click", () => {
  menu.classList.toggle("none");
});

/*----------------------------------translation------------------------------------------------ */

const select = document.getElementById("select");

select.addEventListener("change", function (e) {
  localStorage.setItem("status", select.value);

  if (select.value === "Russian") {
    language = "ru";
    showGreeting(language);
    getWeather(cityElement.value, language);
    const date = new Date();
    currentDate = "ru-RU";
    // showDate(currentDate);
    showTime();
  } else {
    language = "en";
    showGreeting(language);
    getWeather(cityElement.value, language);
    currentDate = "en-EN";
  }
  getQuotes(language);
});

window.addEventListener("load", (el) => {
  select.value = localStorage.getItem("status");
  if (localStorage.getItem("status") === "Russian") {
    language = "ru";
    showGreeting(language);
    getWeather(cityElement.value, language);
    const date = new Date();
    currentDate = "ru-RU";
    showTime();
  } else {
    language = "en";
    showGreeting(language);
    currentDate = "en-EN";
    getWeather(cityElement.value, language);
  }
  getQuotes(language);
});
