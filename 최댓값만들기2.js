function solution(numbers) {
  let answer = [];
  console.log(numbers.sort((a, b) => Math.abs(b) - Math.abs(a)));
  for (let i = 0; i < numbers.length / 2; i++) {
    for (let j = i + 1; j < numbers.length / 2; j++) {
      answer.push(numbers[i] * numbers[j]);
    }
  }
  return Math.max.apply(null, answer);

  // 다른 풀이
  //   numbers.sort((a, b) => a - b);
  //   return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
}
