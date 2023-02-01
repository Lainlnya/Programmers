function solution(sides) {
  sides.sort((a, b) => a - b);
  let answer = 0;
  let temp = sides[1];
  while (sides[0] + temp > sides[1]) {
    answer++;
    temp--;
  }

  answer += sides[1] + sides[0] - sides[1] - 1;
  return answer;

  // 다른 풀이
  // return Math.min(...sides)*2 - 1
}
