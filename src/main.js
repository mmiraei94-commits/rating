import "./style.css";

const ratingEl = document.querySelectorAll(".rating");
const rate1El = document.getElementById("rate1");
const rate2El = document.getElementById("rate2");
const rate3El = document.getElementById("rate3");
const rate4El = document.getElementById("rate4");
const rate5El = document.getElementById("rate5");
const btnSubmitEl = document.getElementById("btnSubmit");
const resultRateEL = document.getElementById("resultRate");
const questionPageEL = document.getElementById("questionPage");
const resultPgeEL = document.getElementById("resultPage");

rate1El.addEventListener("click", () => {
  rate1El.classList.remove("default-selected");
  rate1El.classList.add("selected");

  rate2El.classList.remove("selected");
  rate3El.classList.remove("selected");
  rate4El.classList.remove("selected");
  rate5El.classList.remove("selected");
});
rate2El.addEventListener("click", () => {
  rate2El.classList.add("selected");

  rate1El.classList.remove("default-selected");
  rate1El.classList.remove("selected");
  rate3El.classList.remove("selected");
  rate4El.classList.remove("selected");
  rate5El.classList.remove("selected");
});
rate3El.addEventListener("click", () => {
  rate3El.classList.add("selected");

  rate1El.classList.remove("default-selected");
  rate1El.classList.remove("selected");
  rate2El.classList.remove("selected");
  rate4El.classList.remove("selected");
  rate5El.classList.remove("selected");
});
rate4El.addEventListener("click", () => {
  rate4El.classList.add("selected");

  rate1El.classList.remove("default-selected");
  rate1El.classList.remove("selected");
  rate2El.classList.remove("selected");
  rate3El.classList.remove("selected");
  rate5El.classList.remove("selected");
});
rate5El.addEventListener("click", () => {
  rate5El.classList.add("selected");

  rate1El.classList.remove("default-selected");
  rate1El.classList.remove("selected");
  rate2El.classList.remove("selected");
  rate3El.classList.remove("selected");
  rate4El.classList.remove("selected");
});

btnSubmitEl.addEventListener("click", () => {
  const selectedEl = document.querySelector(".selected");

  if (selectedEl === null) alert("Please select a value 🤩 ⁉️");
  else {
    questionPageEL.classList.add("hide");
    resultPgeEL.classList.remove("hide");
    resultRateEL.textContent = `${selectedEl.textContent}`;
  }
});
