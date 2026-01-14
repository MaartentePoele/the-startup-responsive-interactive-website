const iButton = document.querySelector("#iButton");
const xButton = document.querySelector("#xButton");
const popup = document.querySelector("#popup");
const body = document.querySelector("#mainBody");
let pixelsScrolled = 0;

window.addEventListener("scroll", function () {
  pixelsScrolled = window.scrollY;
  console.log(pixelsScrolled);
});

iButton.addEventListener("click", function () {
  popup.classList.remove("visually-hidden");
  popup.style.setProperty("--y", pixelsScrolled + "px");
  body.classList.add("overflow-hidden");
});

xButton.addEventListener("click", function () {
  popup.classList.add("visually-hidden");
  body.classList.remove("overflow-hidden");
});
