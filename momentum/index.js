/* Отображение времени на странице */

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

/*Отображение даты на странице */
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

/* Приветствие в соответствии со временем */
function showGreeting() {
  const greeting = document.querySelector(".greeting");
  const date = new Date();
  const hours = date.getHours();
  function getTimeOfDay(hours) {
    if (hours === 24 || hours < 6) {
      return "night";
    }
    if (hours < 12) {
      return "morning";
    }
    if (hours < 18) {
      return "day";
    }
    if (hours < 24) {
      return "evening";
    }
  }
  const timeOfDay = getTimeOfDay(hours);
  const greetingText = `Good ${timeOfDay}, `;
  greeting.textContent = greetingText;
}

/* Запись имени пользователя в ЛС */

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
