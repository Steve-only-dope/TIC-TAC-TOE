let currentPlayer = "X";
let moves = 0;
let gameActive = true;
let scores = { "X": 0, "O": 0 };

function cellClick(cell) {
  if (gameActive && !cell.innerHTML) {
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
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWinner() {
  const grid = document.getElementById('grid');
  const cells = grid.getElementsByClassName('cell');
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
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
  }

  currentPlayer = "X";
  moves = 0;
  gameActive = true;
}

function updateScore() {
  document.getElementById('scoreX').innerText = "Score X: " + scores["X"];
  document.getElementById('scoreO').innerText = "Score O: " + scores["O"];
}
