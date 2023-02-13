function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].map((v, index) => (arr1[i][index] = v + arr2[i][index]));
    answer.push(arr1[i]);
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

console.log(solution([[1], [2]], [[3], [4]]));
