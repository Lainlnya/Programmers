function solution(n) {
  let answer = new Set();
  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.add(i);
      n /= i;
    } else {
      i++;
    }
  }

  return [...answer].sort();
}
