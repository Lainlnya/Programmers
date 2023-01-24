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
