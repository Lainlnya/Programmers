function solution(x) {
  return x %
    [...x.toString()].reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0)
    ? false
    : true;
}
