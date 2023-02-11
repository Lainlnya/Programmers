function solution(arr, divisor) {
  let answer = [];
  for (const item of arr) {
    if (item % divisor === 0) answer.push(item);
  }

  if (answer.length === 0) answer.push(-1);

  return answer.sort((a, b) => a - b);
}
