function createTicTacToeBoard(array) {
  // Create a 3x3 grid filled with false (representing empty spaces)
  const board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  // Define X and O to alternate between players
  let currentPlayer = "X";

  // Function to check if a player has won
  function checkWin(player) {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
      if (
        (board[i][0] === player &&
          board[i][1] === player &&
          board[i][2] === player) ||
        (board[0][i] === player &&
          board[1][i] === player &&
          board[2][i] === player)
      ) {
        return true;
      }
    }
    if (
      (board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player) ||
      (board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player)
    ) {
      return true;
    }
    return false;
  }

  // Iterate through the array of moves and update the board
  for (let i = 0; i < array.length; i++) {
    const move = array[i];
    const parts = move.split(" ");
    const row = parseInt(parts[0]);
    const col = parseInt(parts[1]);

    // Check if the cell is empty before making a move
    if (!board[row][col]) {
      board[row][col] = currentPlayer;

      // Check if the current player has won
      if (checkWin(currentPlayer)) {
        console.log(`Player ${currentPlayer} wins!`);
        break; // Game ends
      }

      // Check for a tie (no free spaces left)
      if (i === array.length - 1) {
        console.log("The game ended! Nobody wins :(");
        break; // Game ends
      }

      // Switch to the other player
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else {
      console.log("This place is already taken. Please choose another!");
    }
  }

  // Print the Tic-Tac-Toe board
  for (let i = 0; i < 3; i++) {
    console.log(board[i].map((cell) => (cell ? cell : "false")).join("\t"));
  }
}

createTicTacToeBoard([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
