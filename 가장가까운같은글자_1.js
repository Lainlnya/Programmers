function solution(s) {
  let answer = [];
  s.split('').map((v, i) => {
    if (i === s.indexOf(v)) {
      answer.push(-1);
    } else answer.push(i - s.lastIndexOf(v, i - 1));
  });
  return answer;
}
