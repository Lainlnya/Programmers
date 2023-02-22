function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].map((v, index) => (arr1[i][index] = v + arr2[i][index]));
    answer.push(arr1[i]);
  }
  return answer;
}
