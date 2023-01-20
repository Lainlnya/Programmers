function solution(s1, s2) {
  return s1.filter((num) => s2.includes(num)).length;
}

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));
console.log(solution(['n', 'omg'], ['m', 'dot']));
