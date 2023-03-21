function solution(k, score) {
  let stage = Array.from(k);
  let answer = [];

  for (let i = 0; i < score.length; i++) {
    if (stage.length == k && stage[k - 1] < score[i]) {
      stage.pop();
      stage.push(score[i]);
      stage.sort((a, b) => b - a);
    } else if (stage.length < k) {
      stage.push(score[i]);
      stage.sort((a, b) => b - a);
    }
    answer.push(stage[stage.length - 1]);
  }
  return answer;
}

// stage.length > k && stage[k - 1] < score[i]
// stage.length < k
// 이 두가지 케이스만 stage.push(i)

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
