let randomNumber = Math.floor(Math.random() * 100 + 1);
let attempts = 10;

function checkGuess() {
  const inputElement = document.getElementById('guess');
  const feedbackElement = document.getElementById('feedback');

  while (attempts > 0) {
    attempts--;
    let guess = inputElement.value;
    if (randomNumber == guess) {
      feedbackElement.innerHTML = "Success!";
      feedbackElement.style.color = "green";
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = "Too low! Try again.";
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML = "Too high! Try again.";
      feedbackElement.style.color = "red";
      break;
    }
  }

  if (attempts === 0) {
    feedbackElement.innerHTML = "Game over. You've used all of your attempts!";
    feedbackElement.style.color = "blue";
  }
}