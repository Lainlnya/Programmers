function solution(N, stages) {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    let under = stages.filter((v) => v >= i).length;
    let upper = stages.filter((v) => v === i).length;

    answer.push([i, upper / under]);
  }

  return answer.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}
