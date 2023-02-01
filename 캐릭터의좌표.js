function solution(keyinput, board) {
  const location = [0, 0];
  keyinput.map((item) => {
    switch (item) {
      case 'left':
        location[0]--;
        break;
      case 'right':
        location[0]++;
        break;
      case 'up':
        location[1]++;
        break;
      case 'down':
        location[1]--;
        break;
    }
  });
  for (let i = 0; i < 2; i++) {
    if (Math.abs(location[i]) > Math.floor(board[i] / 2)) {
      if (location[i] > 0) location[i] = Math.floor(board[i] / 2);
      else location[i] = -Math.floor(board[i] / 2);
    }
  }
  return location;
}
