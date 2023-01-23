function solution(i, j, k) {
  let answer = 0;
  const reg = new RegExp(`[${k}]`, 'g');
  for (let item = i; item <= j; item++) {
    if (reg.test(item)) {
      answer += item.toString().match(reg).length;
    }
  }
  return answer;
}

console.log(solution(1, 13, 1));
console.log(solution(10, 50, 5));
console.log(solution(3, 10, 2));
