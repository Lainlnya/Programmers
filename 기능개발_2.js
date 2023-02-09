function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length !== 0) {
    let i = 0;
    progresses = progresses.map((v, i) => v + speeds[i]);

    while (progresses[0] >= 100 && progresses.length !== 0) {
      i++;
      progresses.shift();
      speeds.shift();
    }
    if (i !== 0) answer.push(i);
  }
  return answer;
}
