function solution(common) {
  let answer = 0;
  if (common[2] - common[1] === common[1] - common[0]) {
    answer = common[common.length - 1] + (common[1] - common[0]);
  } else if (common[2] / common[1] === common[1] / common[0]) {
    answer = common[common.length - 1] * (common[1] / common[0]);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
