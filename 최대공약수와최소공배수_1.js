function solution(n, m) {
  let [b, s] = n > m ? [n, m] : [m, n];

  while (b % s !== 0) {
    [b, s] = [s, b % s];
  }
  return [s, (n * m) / s];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
console.log(solution(1254, 582));
