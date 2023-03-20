function solution(board, moves) {
  let answer_array = [];
  let result = 0;
  for (let i = 0; i < moves.length; i++) {
    let board_num = 0;
    while (board_num < board.length) {
      let last_num = board[board_num][moves[i] - 1];

      if (last_num !== 0) {
        if (
          answer_array.length !== 0 &&
          answer_array[answer_array.length - 1] === last_num
        ) {
          result += 2;
          answer_array.pop();
        } else answer_array.push(last_num);

        board[board_num][moves[i] - 1] = 0;
        break;
      }
      board_num++;
    }
  }
  return result;
}
