document.getElementById("check").addEventListener("click", checkGuess);
document.getElementById("reset").addEventListener("click", resetGame);

let num = Math.floor(Math.random() * 100) + 1;
console.log(num);
let attempts = 0;

function checkGuess() {
  const val = parseInt(document.getElementById("guess").value);
  const msg = document.getElementById("msg");
  if (!val || val < 1 || val > 100)
    return (msg.textContent = "Enter a valid number");
  attempts++;
  if (val === num) {
    msg.textContent = `Correct! Attempts: ${attempts}`;
    document.getElementById("reset").style.display = "inline-block";
  } else {
    msg.textContent = val > num ? "Too high!" : "Too low!";
  }
}

function resetGame() {
  num = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("msg").textContent = "";
  document.getElementById("guess").value = "";
  document.getElementById("reset").style.display = "none";
}
