function solution(quiz) {
  let answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const beTrue = quiz[i].split('=');
    if (eval(beTrue[0]) == beTrue[1].trim()) {
      answer.push('O');
    } else {
      answer.push('X');
    }
  }
  return answer;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
console.log(
  solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'])
);
