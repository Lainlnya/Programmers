function solution(board) {
  let answer = 0;
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  const bombs = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) bombs.push([i, j]);
    }
  }

  bombs.forEach(([x, y]) => {
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (0 <= nx && nx < board.length && 0 <= ny && ny < board.length) {
        board[nx][ny] = 1;
      }
    }
  });

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) answer++;
    }
  }
  return answer;
}
