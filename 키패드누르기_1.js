function solution(numbers, hand) {
  let answer = '';
  let right = 0,
    left = 0;
  numbers.map((v) => {
    if (v === 1 || v === 4 || v === 7) {
      answer += 'L';
      left = v;
    } else if (v === 3 || v === 6 || v === 9) {
      answer += 'R';
      right = v;
    } else {
    }
  });
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
