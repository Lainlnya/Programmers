function solution(sides) {
  let answer = sides.sort();
  return answer[0] + answer[1] > answer[2] ? 1 : 2;
}

console.log(solution([1, 2, 3]));
console.log(solution([3, 6, 2]));
console.log(solution([199, 72, 222]));
