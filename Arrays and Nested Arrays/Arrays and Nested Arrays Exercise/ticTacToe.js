function ticTacToe(input) {
  function printMatrix() {
    for (let row = 0; row < board.length; row++) {
      console.log(board[row].join("\t"));
    }
  }
  //board for the games flled with false as a value
  const board = new Array(3).fill().map(() => new Array(3).fill(false)); //имаме 3 реда с false, кето е даденото
  let player = "X";
  
//loop the inout
  for (const line of input) {
    //extract matrix coordinates
    const [row, col] = line.split(" ").map((e) => Number(e));
//check if place is already taken
    if (board[row][col] !== false) {
      console.log(`This place is already taken. Please choose another!`);
      continue;
    }
//set the value of the current player
    board[row][col] = player;
//check for winner
    for (let i = 0; i < 3; i++) {
      if (
        (board[i][0] === player &&
          board[i][1] === player &&
          board[i][2] === player) ||
        (board[0][i] === player &&
          board[1][i] === player &&
          board[2][i] === player)
      ) {
        console.log(`Player ${player} wins!`);
        printMatrix();
        return;
      }
      //check for winner
      if (
        (board[0][0] === player &&
          board[1][1] === player &&
          board[2][2] === player) ||
        (board[0][2] === player &&
          board[1][1] === player &&
          board[2][0] === player)
      ) {
        console.log(`Player ${player} wins!`);
        printMatrix();
        return;
      }
      //include false flaf to tedermen when game is over
      let includesFlase = false; //да знаем, когато играта е приключила

      for (let row = 0; row < board.length; row++) {
        if (board[row].includes(false)) {
          includesFlase = true;
        }
      }
      //check if nobody wins
      if (!includesFlase) {
        console.log(`The game ended! Nobody wins:(")`);
        printMatrix();
        continue;
      }
      player=player="X" ? "O" : "X"
    }
  }
}
ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]);
