function solution(X, Y) {
  let answer = '';
  X = X.split('');
  Y = Y.split('');

  for (let i = 0; i < 10; i++) {
    const num_x = X.filter((v) => Number(v) === i).length;
    const num_y = Y.filter((v) => Number(v) === i).length;

    answer += i.toString().repeat(Math.min(num_x, num_y));
  }

  if (answer === '') return '-1';
  else if (Number(answer) === 0) return '0';
  else
    return answer
      .split('')
      .sort((a, b) => Number(b) - Number(a))
      .join('');
}

console.log(solution('100', '2345'));
console.log(solution('100', '203045'));
console.log(solution('100', '123450'));
console.log(solution('12321', '42531'));
console.log(solution('5525', '1255'));
