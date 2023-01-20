function solution(n, t) {
  while (t > 0) {
    n = 2 * n;
    t--;
  }
  return n;
}

console.log(solution(2, 10));
console.log(solution(7, 15));
