function solution(t, p) {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let temp = t.substring(i, p.length + i);
    if (parseInt(temp) <= parseInt(p)) answer++;
  }
  return answer;
}
