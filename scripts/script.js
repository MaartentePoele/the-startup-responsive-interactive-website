const iButton = document.querySelector("#iButton");
const xButton = document.querySelector("#xButton");
const popup = document.querySelector("#popup");
const body = document.querySelector("#mainBody");

iButton.addEventListener("click", function () {
  const pixelsScrolled = window.scrollY;

  popup.style.setProperty("--y", pixelsScrolled + "px");
  popup.classList.remove("visually-hidden");
  body.classList.add("overflow-hidden");
});

xButton.addEventListener("click", function () {
  popup.classList.add("visually-hidden");
  body.classList.remove("overflow-hidden");
});
