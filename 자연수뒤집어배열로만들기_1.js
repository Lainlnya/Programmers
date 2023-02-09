function solution(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((v) => parseInt(v));
}
