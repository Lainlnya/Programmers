function solution(chicken) {
  var answer = 0;
  while (chicken > 10) {
    let rest_chicken = 0;
    if (chicken >= 10) {
      answer += Math.floor(chicken / 10);
      rest_chicken = chicken % 10;
      chicken = Math.floor(chicken / 10) + rest_chicken;
    } else break;
  }
  if (chicken >= 10) answer += Math.floor(chicken / 10);
  return answer;
}
