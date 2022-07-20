const moves = ['Rock', 'Paper', 'Scissors']

function computerMove() {
  let number = Math.floor(Math.random() * 3);
  return moves[number]
}

function playGame(playerMove, computerMove) {
  let indexDiff = moves.indexOf(playerMove) - moves.indexOf(computerMove);

  let msg;
  if (indexDiff == 1 || indexDiff == -2) {
      msg = `You win! ${playerMove} beats ${computerMove}`;
  } else if (indexDiff == -1 || indexDiff == 2) {
      msg = `You lose! ${computerMove} beats ${playerMove}`;
  } else {
    msg = "It's a draw"
  }

  return msg;
}
