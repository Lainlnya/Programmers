function solution(sides) {
  let answer = sides.sort();
  return answer[0] + answer[1] > answer[2] ? 1 : 2;
}
