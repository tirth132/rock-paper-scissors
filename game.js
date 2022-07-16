const moves = ['Rock', 'Paper', 'Scissors']

function computerMove() {
  let number = Math.floor(Math.random() * 3);
  return moves[number]
}

function playGame(playerMove, computerMove) {
  let playerMoveIndex = moves.indexOf(playerMove);
  let computerMoveIndex = moves.indexOf(computerMove);

  let msg;
  if (playerMoveIndex - computerMoveIndex == 1 ||
    playerMoveIndex - computerMoveIndex == -2) {
      msg = `You win! ${playerMove} beats ${computerMove}`;
  } else if (playerMoveIndex - computerMoveIndex == -1 ||
    playerMoveIndex - computerMoveIndex == 2) {
      msg = `You lose! ${computerMove} beats ${playerMove}`;
  } else {
    msg = "It's a draw"
  }

  return msg;
}
