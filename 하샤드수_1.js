function solution(x) {
  return x %
    [...x.toString()].reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0)
    ? false
    : true;
}

console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));
