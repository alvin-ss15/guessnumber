let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function guessNumber() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");

  const userGuess = parseInt(guessInput.value);
  guesses++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${guesses} tries.`;
    guessInput.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low. Guess again.";
  } else {
    message.textContent = "Too high. Guess again.";
  }

  guessInput.value = "";
}