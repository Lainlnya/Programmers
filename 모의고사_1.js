function solution(answers) {
  let answer = [];
  const num_1 = [1, 2, 3, 4, 5],
    num_2 = [2, 1, 2, 3, 2, 4, 2, 5],
    num_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let result = [
    answers.filter((v, i) => v === num_1[i % num_1.length]).length,
    answers.filter((v, i) => v === num_2[i % num_2.length]).length,
    answers.filter((v, i) => v === num_3[i % num_3.length]).length,
  ];
  const max_number = Math.max.apply(null, result);

  if (max_number === result[0]) answer.push(1);
  if (max_number === result[1]) answer.push(2);
  if (max_number === result[2]) answer.push(3);

  return answer;
}
