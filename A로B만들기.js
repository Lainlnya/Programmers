function solution(before, after) {
  const before_array = [...before].sort();
  const after_array = [...after].sort();
  return before_array.join('') === after_array.join('') ? 1 : 0;
}
