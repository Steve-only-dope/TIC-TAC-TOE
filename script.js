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
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (cells[a].classList.contains('x') &&
      cells[a].classList.contains('x') === cells[b].classList.contains('x') &&
      cells[a].classList.contains('x') === cells[c].classList.contains('x')) {
      return true;
    } else if (cells[a].classList.contains('o') &&
      cells[a].classList.contains('o') === cells[b].classList.contains('o') &&
      cells[a].classList.contains('o') === cells[c].classList.contains('o')) {
      return true;
    }
  }

  return false;
}

function resetGame() {
  const grid = document.getElementById('grid');
  const cells = grid.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.innerHTML = '';
    cell.classList.remove('x', 'o');
  }

  currentPlayer = "🔴";
  moves = 0;
  gameActive = true;
}

function updateScore() {
  document.getElementById('scoreX').innerText = "Score 🔴: " + scores["🔴"];
  document.getElementById('scoreO').innerText = "Score 🟡: " + scores["🟡"];
}
