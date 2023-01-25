function solution(score) {
  let answer = [];
  const average = score.map((each) => (each[0] + each[1]) / 2);
  const sorted_av = score
    .map((each) => (each[0] + each[1]) / 2)
    .sort((a, b) => b - a);
  const average_map = new Map();

  for (let i = 0; i < sorted_av.length; i++) {
    if (!average_map.has(sorted_av[i])) {
      average_map.set(sorted_av[i], i + 1);
    }
  }

  average.map((score) => {
    answer.push(average_map.get(score));
  });
  return answer;
}
