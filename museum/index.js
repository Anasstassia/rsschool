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
