function solution(n) {
  let answer = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer.push(i);
      if (n / i !== i) answer.push(n / i);
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

console.log(solution(24));
console.log(solution(29));
