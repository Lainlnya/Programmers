function solution(common) {
  let answer = 0;
  if (common[2] - common[1] === common[1] - common[0]) {
    answer = common[common.length - 1] + (common[1] - common[0]);
  } else if (common[2] / common[1] === common[1] / common[0]) {
    answer = common[common.length - 1] * (common[1] / common[0]);
  }
  return answer;
}
