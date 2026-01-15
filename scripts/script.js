// Declarations of CSS selectors
const iButton = document.querySelector("#iButton");
const xButton = document.querySelector("#xButton");
const popup = document.querySelector("#popup");
const body = document.querySelector("#mainBody");

// Opens the popup and freezes background scrolling
iButton.addEventListener("click", function () {
  // Checks how far down the user scrolled
  const pixelsScrolled = window.scrollY;

  // Puts the value of pixelsScrolled into --y for CSS use
  popup.style.setProperty("--y", pixelsScrolled + "px");

  popup.classList.remove("visually-hidden");
  body.classList.add("overflow-hidden");
});

// Closes the popup and unfreezes background scrolling
xButton.addEventListener("click", function () {
  popup.classList.add("visually-hidden");
  body.classList.remove("overflow-hidden");
});
