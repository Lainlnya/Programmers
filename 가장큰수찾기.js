function solution(array) {
  let answer = [];
  const max_number = Math.max(...array);
  answer.push(max_number, array.indexOf(max_number));
  return answer;
}
