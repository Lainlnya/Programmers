function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
}
