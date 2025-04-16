// script.js
let randomNumber = Math.floor(Math.random() * 100 + 1);
let attempts = 10;

function checkGuess() {
  const inputElement = document.getElementById('guess');
  const feedbackElement = document.getElementById('feedback');

  attempts--;
  let guess = inputElement.value;
  if (randomNumber == guess) {
    feedbackElement.innerHTML = "Success!";
    feedbackElement.style.color = "green";
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = `Too low! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = `Too high! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  }

  if (attempts === 0) {
    feedbackElement.innerHTML = "Game over. You've used all of your attempts!";
    feedbackElement.style.color = "blue";
  }
}