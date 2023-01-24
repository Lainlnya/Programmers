function solution(array) {
  let answer = 0;
  let total = array.join();
  for (let i = 0; i < total.length; i++) {
    if (total[i] === '7') answer++;
  }
  return answer;
}
