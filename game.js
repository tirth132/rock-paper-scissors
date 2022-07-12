function computerMove() {
  let number = Math.floor(Math.random() * 3 + 1);
  switch (number) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    default:
      return 'Scissors';
  }
}
