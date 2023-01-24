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
