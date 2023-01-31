function solution(n) {
  let count = 0;
  while (n > 0) {
    let temp = 0;
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        temp++;
        if (n / i !== i) temp++;
      }
    }
    if (temp >= 3) count++;
    n--;
  }
  return count;
}
