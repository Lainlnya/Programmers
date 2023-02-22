function solution(n, arr1, arr2) {
  let answer = [];
  let c_arr1 = arr1.map((v) => {
    let temp = v.toString(2).split('');
    while (temp.length < n) {
      temp.unshift('0');
    }
    return temp;
  });
  let c_arr2 = arr2.map((v) => {
    let temp = v.toString(2).split('');
    while (temp.length < n) {
      temp.unshift('0');
    }
    return temp;
  });

  for (let i = 0; i < c_arr1.length; i++) {
    answer.push([]);
    for (let j = 0; j < c_arr1.length; j++) {
      c_arr1[i][j] === '0' && c_arr2[i][j] === '0'
        ? answer[i].push(' ')
        : answer[i].push('#');
    }
    answer[i] = answer[i].join('');
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
