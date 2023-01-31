function solution(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++;
      if (n / i !== i) count++;
    }
  }
  return count;
}

console.log(solution(100));
