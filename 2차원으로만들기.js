function solution(num_list, n) {
  let answer = [];
  let temp = [];

  for (let i = 0; i < num_list.length; i++) {
    temp.push(num_list[i]);
    if ((i + 1) % n === 0) {
      answer.push(temp);
      temp = [];
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
