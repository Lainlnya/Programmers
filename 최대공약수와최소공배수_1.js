function solution(n, m) {
  let [b, s] = n > m ? [n, m] : [m, n];

  while (b % s !== 0) {
    [b, s] = [s, b % s];
  }
  return [s, (n * m) / s];
}
