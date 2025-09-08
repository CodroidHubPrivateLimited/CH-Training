let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let score = 100;

const userInput = document.getElementById("userInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const scoreDisplay = document.getElementById("score");

function checkGuess() {
  const userGuess = Number(userInput.value);
  attempts++;
  attemptsDisplay.textContent = attempts;

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "⚠️ Please enter a number between 1 and 100!";
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    guessBtn.disabled = true;
    userInput.disabled = true;
  } else if (userGuess > randomNumber) {
    message.textContent = "📉 Too High! Try again.";
    score -= 5;
  } else {
    message.textContent = "📈 Too Low! Try again.";
    score -= 5;
  }

  scoreDisplay.textContent = score;
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  score = 100;
  attemptsDisplay.textContent = attempts;
  scoreDisplay.textContent = score;
  message.textContent = "";
  userInput.value = "";
  guessBtn.disabled = false;
  userInput.disabled = false;
}

guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);
