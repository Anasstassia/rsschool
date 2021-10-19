/* Отображение времени на странице */

function showTime() {
  const time = document.querySelector(".time");
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  setTimeout(showTime, 1000);
}
showTime();

/*Отображение даты на странице */
function showDate() {
  const dateSelector = document.querySelector(".date");
  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  };
  const currentDate = date.toLocaleDateString("ru-RU", options);
  dateSelector.textContent = currentDate;
}
