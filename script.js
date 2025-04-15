let randomNumber = Math.floor(Math.random() * 100 + 1);
let attempts = 10;

function checkGuess() {
  const inputElement = document.getElementById('guess');
  const feedbackElement = document.getElementById('feedback');
  let guess = inputElement.value;

  attempts--;

  if (randomNumber == guess) {
    feedbackElement.innerHTML = "Success!";
    feedbackElement.style.color = "green";
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = `Too low! Try again. Attempts left: ${attempts}`;
    feedbackElement.style.color = "red";
  } else if (guess > randomNumber) {
    feedbackElement.innerHTML = `Too high! Try again. Attempts left: ${attempts}`;
    feedbackElement.style.color = "red";
  }
}