function solution(s1, s2) {
  return s1.filter((num) => s2.includes(num)).length;
}
