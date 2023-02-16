function solution(N, stages) {
  let stage = 1;
  let answer = new Map();

  while (stage <= N) {
    answer.set(stage, stages.filter((v) => v <= stage).length / stages.length);
    stages = stages.filter((v) => v > stage);
    stage++;
  }
  return [...new Map([...answer].sort((a, b) => b[1] - a[1])).keys()];
}
