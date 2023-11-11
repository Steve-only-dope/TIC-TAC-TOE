let currentPlayer = "🔴";
let moves = 0;
let gameActive = true;
let scores = { "🔴": 0, "🟡": 0 };

function makeMove(cell) {
  if (gameActive && !cell.innerHTML) {
    cell.classList.add(currentPlayer === "🔴" ? 'x' : 'o');
    cell.innerHTML = currentPlayer;
    moves++;
    if (checkWinner()) {
      gameActive = false;
      scores[currentPlayer]++;
      updateScore();
      setTimeout(function() {
        alert(currentPlayer + " a gagné!");
        resetGame();
      }, 100);
    } else if (moves === 9) {
      gameActive = false;
      setTimeout(function() {
        alert("Match nul!");
        resetGame();
      }, 100);
    } else {
      currentPlayer = currentPlayer === "🔴" ? "🟡" : "🔴";
    }
  }
}

function checkWinner() {
  const grid = document.getElementById('grid');
  const cells = grid.getElementsByClassName('cell');
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4,

