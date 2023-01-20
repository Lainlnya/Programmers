function solution(array) {
  let answer = [];
  const max_number = Math.max(...array);
  answer.push(max_number, array.indexOf(max_number));
  return answer;
}

console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));
