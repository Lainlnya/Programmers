function solution(n) {
  let i = n,
    answer = n;
  while (i > 0) {
    if (n % i === 1 && answer > i) {
      answer = i;
    }
    i--;
  }
  return answer;
}

console.log(solution(10));
console.log(solution(12));
