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
randomNum = getRandomNum(1, 20);

function getRandomNum(min, max) {
  //   min = 1;
  //   max = 20;
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

/*------------------------------ Виджет погоды------------------------------------- */

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherDescription = document.querySelector(".weather-description");
const cityElement = document.querySelector(".city");
const errorWeather = document.querySelector(".weather-error");

async function getWeather(city) {
  cityElement.value = city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=ba499dceea3b725ead8e60cb81d7ecb1&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  //ловим ошибку при неверном городе
  if (data.cod !== 200) {
    errorWeather.textContent = "Введите верный город";
  }

  localStorage.setItem("city", city);
  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
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
getQuotes();

async function getQuotes() {
  const n = getRandomNum(1, 100);
  const quotes_ =
    "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  const res = await fetch(quotes_);
  const data = await res.json();

  quote.textContent = data.quotes[n].quote;
  author.textContent = data.quotes[n].author;
}

//по кнопке меняем цитату
changeQuote.addEventListener("click", getQuotes);
