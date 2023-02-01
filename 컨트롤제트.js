function solution(s) {
  const temp = s.split(' ');
  let answer = 0;
  temp.map((v, i) => {
    if (v === 'Z') {
      answer -= temp[i - 1];
    } else {
      answer += parseInt(v);
    }
  });
  return answer;
}
