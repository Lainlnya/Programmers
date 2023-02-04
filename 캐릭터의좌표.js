function solution(keyinput, board) {
  const location = [0, 0];
  keyinput.map((item) => {
    switch (item) {
      case 'left':
        if (location[0] > -Math.floor(board[0] / 2)) location[0]--;
        break;
      case 'right':
        if (location[0] < Math.floor(board[0] / 2)) location[0]++;
        break;
      case 'up':
        if (location[1] < Math.floor(board[1] / 2)) location[1]++;
        break;
      case 'down':
        if (location[1] > -Math.floor(board[1] / 2)) location[1]--;
        break;
    }
  });

  return location;
}
