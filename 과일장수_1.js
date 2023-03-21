function solution(k, m, score) {
  let answer = 0;
  const sorted = score.sort((a, b) => b - a);
  sorted.map((v, i) => {
    if ((i + 1) % m === 0) answer += v * m;
  });
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
