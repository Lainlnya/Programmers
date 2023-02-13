function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

console.log(solution(64));
console.log(solution(3));
