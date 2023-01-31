function solution(n) {
  let num = 1,
    count = 0;
  while (true) {
    count++;
    num *= count;
    if (num == n) return count;
    if (num > n) return count - 1;
  }
}
