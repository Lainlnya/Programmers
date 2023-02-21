function solution(X, Y) {
  let temp = [],
    answer = '';

  for (let i = 0; i < Y.length; i++) {
    if (X.includes(Y[i])) {
      temp.push(Y[i]);
    }
  }
  temp.sort((a, b) => b - a);

  if (temp.length === 0) {
    answer = '-1';
  } else if (temp[0] === '0') {
    answer = '0';
  } else {
    temp.map((v) => (answer += v));
  }
  return answer;
}

console.log(solution('100', '2345'));
console.log(solution('100', '203045'));
console.log(solution('100', '123450'));
console.log(solution('12321', '42531'));
console.log(solution('5525', '1255'));
