const moves = ['Rock', 'Paper', 'Scissors']

function computerMove() {
  let number = Math.floor(Math.random() * 3);
  return moves[number]
}
