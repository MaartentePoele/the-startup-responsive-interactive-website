// Declarations of CSS selectors
const iButton = document.querySelector("#iButton");
const xButton = document.querySelector("#xButton");
const popup = document.querySelector("#popup");
const body = document.querySelector("#mainBody");
const label = document.querySelector(".energy-label-a");
const iIcon = document.querySelector(".i-icon");

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

// Gives an animation to the i-icon when the user clicks on the label
label.addEventListener("click", function () {
  iIcon.classList.add("i-animation");

  // Waits for the animation to end before removing the class with the animation
  iIcon.addEventListener("animationend", function () {
    iIcon.classList.remove("i-animation");
  });
});
