function solution(n) {
  const one = '수',
    two = '박';
  let answer = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) answer += one;
    else answer += two;
  }
  return answer;
}

console.log(solution(3));
console.log(solution(4));
