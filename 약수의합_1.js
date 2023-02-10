function solution(n) {
  let answer = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
      if (n / i !== i) answer.push(n / i);
    }
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}
