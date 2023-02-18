function solution(numbers, pick) {
  if (pick === 1) return numbers.map((elem) => [elem]);

  let answer = [];
  numbers.forEach((element, index) => {
    const smaller_combi = solution(numbers.slice(index + 1), pick - 1);
    smaller_combi.forEach((combi) => {
      if (!answer.includes([element] + combi)) answer.push([element] + combi);
    });
  });
  return answer.sort();
}

console.log(solution([2, 1, 3, 4, 1], 2));
